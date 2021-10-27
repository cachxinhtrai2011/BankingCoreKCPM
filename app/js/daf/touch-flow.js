/*eslint eqeqeq: ["error", "smart"]*/
/*!
* Data Aquarium Framework - Display Flow for Touch UI
* Copyright 2021 Code On Time LLC; Licensed MIT; http://codeontime.com/license
*/

(function () {
    var _app = $app,
        _touch = _app.touch,
        _designer,
        resourcesMobile = Web.DataViewResources.Mobile,
        $document = $(document),
        resizing, pendingSelectionChanged,
        designerToolbars,
        getBoundingClientRect = _app.clientRect,
        log = [],
        originalFlow,
        // html utilities
        htmlUtilities = _app.html,
        htmlTag = htmlUtilities.tag,
        div = htmlUtilities.div,
        span = htmlUtilities.span,
        $htmlTag = htmlUtilities.$tag,
        $p = htmlUtilities.$p,
        $div = htmlUtilities.$div,
        $span = htmlUtilities.$span,
        $a = htmlUtilities.$a,
        $i = htmlUtilities.$i,
        $li = htmlUtilities.$li,
        $ul = htmlUtilities.$ul;

    function toConfig(elem) {
        return _touch.scrollable(elem).data('displayFlow');
    }

    function toDisplayObj(container) {
        container = $(container);
        var index = container.data('index'),
            config = toConfig(container);
        return config.flow[index];
    }

    function findDisplayFlow(selector) {
        return _touch.activePage('.app-display-flow-designer ' + selector);
    }

    function displayFlowSelection() {
        return findDisplayFlow('.app-container-selected');
    }

    _designer = _app.display.designer = {
        attach: function () {
            _touch.activePage('.app-display-flow').addClass('app-display-flow-designer');
        },
        selectionChanged: function () {
            var config = toConfig();
            if (config)
                $document.trigger($.Event('displaydesignerselectionchanged.app', { flow: config.flow, selection: displayFlowSelection() }));
        },
        saveState: function () {
            var scrollable = _touch.scrollable();
            if (!originalFlow)
                originalFlow = JSON.parse(scrollable.data('originalFlow'));
            log.push(JSON.stringify(originalFlow));
        },
        cut: function () {
            findDisplayFlow('.app-container-cut').removeClass('app-container-cut');
            displayFlowSelection().addClass('app-container-cut');
            designer_selectionChanged();
        },
        paste: function (after) {
            var selection = displayFlowSelection();
            _designer.saveState();
        },
        pasteAfter: function () {
            _designer.paste(true);
        },
        pasteBefore: function () {
            _designer.paste();
        },
        settings: function () {
            _app.survey({
                values: {
                    flow: 'row',
                    jumbo: false
                },
                questions: [
                    //{ name: "q", type: "number" },
                    {
                        name: 'flow', text: 'Flow', required: true,
                        items: {
                            list: [
                                { value: 'column', text: 'Column' },
                                { value: 'row', text: 'Row' }
                            ]
                        }
                    },
                    {
                        name: 'jumbo', text: 'Jumbo', type: 'bool', required: true,
                        items: {
                            style: "DropDownList"
                        }
                    }
                ],
                options: {
                    modal: {
                        dock: "right",
                        max: 'xxs',
                        gap: false,
                        tapOut: true,
                        //background: 'transparent'
                    },
                    discardChangesPrompt: false,
                }
            });
        }
    };

    $document.on('mousedown vclick', '.app-display-flow-designer .app-container', function (e) {
        var container = $(this),
            containerIndex = container.data('index'),
            displayObj = toDisplayObj(container),
            selection, startIndex, endIndex, count;
        if (displayObj && !displayObj.readOnly) {
            if (e.type === 'mousedown')
                if (_touch.pointer('touch'))
                    return;
                else
                    $.touch.skipMouseEnd = true;
            if (container.is('.app-container-selected') && !e.ctrlKey && !e.shiftKey && displayFlowSelection().length === 1)
                return;
            if (e.ctrlKey)
                container.toggleClass('app-container-selected', !container.is('.app-container-selected'));
            else {
                if (e.shiftKey) {
                    //_touch.clearHtmlSelection();
                    selection = displayFlowSelection();
                    if (selection.length) {
                        startIndex = selection.first().data('index');
                        endIndex = selection.last().data('index');
                        if (containerIndex < startIndex)
                            startIndex = containerIndex;
                        else
                            endIndex = containerIndex;
                    }
                }
                else
                    startIndex = endIndex = containerIndex;
                displayFlowSelection().removeClass('app-container-selected');
                if (startIndex === endIndex)
                    container.addClass('app-container-selected');
                else
                    findDisplayFlow('.app-container').each(function () {
                        var c = $(this),
                            cIndex = c.data('index')
                        if (startIndex <= cIndex && cIndex <= endIndex)
                            c.addClass('app-container-selected');
                    });
            }
            count = displayFlowSelection().length;
            _designer.selectionChanged();
            _touch.notify({ force: true, text: String.format(count > 1 ? resourcesMobile.ItemsSelectedMany : resourcesMobile.ItemsSelectedOne, count) });
            return false;
        }
        else
            _touch.notify({ force: true, text: 'This display object is read-only.' });
    }).on('vclick', 'article', function (e) {
        var selectedContainers = displayFlowSelection().removeClass('app-container-selected app-container-cut');
        if (selectedContainers.length) {
            _designer.selectionChanged();
            _touch.notify({ force: true, text: String.format(resourcesMobile.ItemsSelectedMany, 0) });
        }
    }).on('displaydesignerselectionchanged.app', function (e) {
        if (resizing) {
            $document.one('resized.app', designer_selectionChanged);
            pendingSelectionChanged = true;
        }
        else
            designer_selectionChanged();
    }).on('resizing.app', function () {
        if (designerToolbars) {
            designerToolbars.top.hide();
            designerToolbars.bottom.hide();
        }
        resizing = true;
    }).on('resized.app', function () {
        if (!pendingSelectionChanged)
            designer_selectionChanged(); // respond to the width changes that are not causing the workflow since the visual breakpoint has not been triggered
        resizing = false;
    }).on('vclick', '.app-display-flow-toolbar .app-btn', function (e) {
        var that = $(this),
            name = that.attr('class').match(/\bapp-btn-([\w\-]+)/)[1],
            i;
        i = name.indexOf('-');
        while (i > 0) {
            name = name.substring(0, i) + name.charAt(i + 1).toUpperCase() + name.substring(i + 2);
            i = name.indexOf('-');
        }
        if (!_designer[name])
            _touch.notify({ force: true, text: name });
        else
            _designer[name]();
        return false;
    });

    function toolbarButton(toolbar, name, icon) {
        var tooltips = {
            'drag': 'Drag',
            'settings': 'Settings',
            'edit': 'Edit',
            'cut': 'Cut',
            'delete': 'Delete',
            'copy': 'Copy',
            'insert-before': 'Insert Before',
            'insert-after': 'Insert After',
            'paste-before': 'Paste Before',
            'paste-after': 'Paste After'
        }
        toolbar = toolbar === 'top' ? designerToolbars.top : designerToolbars.bottom;
        if (toolbar.is(':empty'))
            $span('app-btn-separator').appendTo(toolbar);
        _touch.icon('material-icon-' + (icon || name), $span('app-btn app-btn-' + name).appendTo(toolbar)).attr('data-title', tooltips[name]);
        $span('app-btn-separator').appendTo(toolbar);
    }

    function toggleToolbarButton(name, state, toolbar) {
        if (designerToolbars)
            if (toolbar)
                toolbar.find('.app-btn-' + name).toggleClass('app-hidden', !state);
            else {
                toggleToolbarButton(name, state, designerToolbars.top);
                toggleToolbarButton(name, state, designerToolbars.bottom);
            }
    }

    function designer_selectionChanged() {
        pendingSelectionChanged = false;

        var selection = displayFlowSelection(),
            scrollable = _touch.scrollable(),
            scrollableRect = getBoundingClientRect(scrollable),
            scrollTop = scrollable.scrollTop(),
            topContainerRect, bottomContainerRect,
            canPaste, canEdit;
        if (selection.length) {
            if (!designerToolbars) {
                designerToolbars = {
                    'top': $div('app-display-flow-toolbar app-display-flow-toolbar-top').appendTo(scrollable),
                    'bottom': $div('app-display-flow-toolbar app-display-flow-toolbar-bottom').appendTo(scrollable)
                };
                // top buttons
                toolbarButton('top', 'drag', 'drag_indicator');
                toolbarButton('top', 'settings');
                toolbarButton('top', 'edit');
                toolbarButton('top', 'copy', 'content_copy');
                toolbarButton('top', 'cut', 'content_cut');
                toolbarButton('top', 'delete', 'delete_outline');
                toolbarButton('top', 'insert-before', 'add');
                toolbarButton('top', 'paste-before', 'content_paste');
                // bottom buttons
                toolbarButton('bottom', 'drag', 'drag_indicator');
                toolbarButton('bottom', 'insert-after', 'add');
                toolbarButton('bottom', 'paste-after', 'content_paste');
            }
            topContainerRect = getBoundingClientRect(selection);
            bottomContainerRect = getBoundingClientRect(selection[selection.length - 1]);
            designerToolbars.top.show().css({
                'left': topContainerRect.left - 2,
                'top': topContainerRect.top - designerToolbars.top.height() - 3 + scrollTop - scrollableRect.top
            });
            designerToolbars.bottom.show().css({
                'left': bottomContainerRect.left - 2,
                'top': bottomContainerRect.bottom + 3 + scrollTop - scrollableRect.top
            });
            // change the state of the buttons
            canPaste = !selection.first().is('.app-container-cut') && findDisplayFlow('.app-container-cut').length;
            toggleToolbarButton('paste-before', canPaste);
            toggleToolbarButton('paste-after', canPaste);
            toggleToolbarButton('cut', selection.filter(':not(.app-container-cut)').length);
            canEdit = selection.length === 1;
            toggleToolbarButton('edit', canEdit);
            toggleToolbarButton('settings', canEdit);

        }
        else {
            if (designerToolbars) {
                designerToolbars.top.hide();
                designerToolbars.bottom.hide();
            }
        }
    }
})();
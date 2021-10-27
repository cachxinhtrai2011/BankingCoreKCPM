
/*!
* Data Aquarium Framework - Resources
* Copyright 2008-2018 Code On Time LLC; Licensed MIT; http://codeontime.com/license
*/
(function () {
    Type.registerNamespace('Web');

    var _dvr = Web.DataViewResources = {};

    _dvr.Common = {
        WaitHtml: '<div class="Wait"></div>'
    };

    _dvr.Pager = {
        ItemsPerPage: 'Mục mỗi trang:',
        PageSizes: [10, 15, 20, 25],
        ShowingItems: 'Xếp \u003cb\u003e{0}\u003c/b\u003e \u003cb\u003e{1}\u003c/b\u003e mục \u003cb\u003e{2}\u003c/b\u003e',
        SelectionInfo: ' (<b>{0}</b> selected)',
        Refresh: 'Làm mới',
        Next: 'Tiếp theo »',
        Previous: '« Trước',
        Page: 'Trang',
        PageButtonCount: 10
    };

    _dvr.ActionBar = {
        View: 'Xem'
    };

    _dvr.ModalPopup = {
        Close: 'Đóng',
        MaxWidth: 800,
        MaxHeight: 600,
        OkButton: 'OK',
        CancelButton: 'Hủy bỏ',
        SaveButton: 'Lưu',
        SaveAndNewButton: 'Lưu và New'
    };

    _dvr.Menu = {
        SiteActions: 'Site Actions',
        SeeAlso: 'Xem thêm',
        Summary: 'Tóm tắt thông tin',
        Tasks: 'Nhiệm vụ',
        About: 'Giới'
    };

    _dvr.HeaderFilter = {
        GenericSortAscending: 'Nhỏ nhất trên Top',
        GenericSortDescending: 'Lớn nhất trên đầu',
        StringSortAscending: 'Tăng dần',
        StringSortDescending: 'Giảm dần',
        DateSortAscending: 'Cũ nhất trên đầu',
        DateSortDescending: 'On Top',
        EmptyValue: '(Trống)',
        BlankValue: '(Blank)',
        Loading: 'Loading ...',
        ClearFilter: 'Rõ ràng lọc từ {0}',
        SortBy: 'Sắp xếp bởi {0}',
        MaxSampleTextLen: 80,
        CustomFilterOption: 'Bộ lọc ...'
    };

    _dvr.InfoBar = {
        FilterApplied: 'Một bộ lọc đã được áp dụng.',
        ValueIs: ' <span class="Highlight">{0}</span> ',
        Or: ' hoặc ',
        And: ' và ',
        EqualTo: 'bằng ',
        LessThan: 'ít hơn ',
        LessThanOrEqual: 'nhỏ hơn hoặc bằng ',
        GreaterThan: 'lớn hơn ',
        GreaterThanOrEqual: 'lớn hơn hoặc bằng ',
        Like: 'giống như ',
        StartsWith: 'bắt đầu với ',
        Empty: 'trống',
        QuickFind: ' Lĩnh vực nào có chứa '
    };

    _dvr.Lookup = {
        SelectToolTip: 'Chọn {0}',
        ClearToolTip: 'Rõ ràng {0}',
        NewToolTip: 'New {0}',
        SelectLink: '(Lựa chọn)',
        ShowActionBar: true,
        DetailsToolTip: 'Xem chi tiết cho {0}',
        ShowDetailsInPopup: true,
        GenericNewToolTip: 'Tạo mới',
        AddItem: 'Thêm mục'
    };

    _dvr.Validator = {
        Required: 'Yêu cầu',
        RequiredField: 'Trường này là bắt buộc.',
        EnforceRequiredFieldsWithDefaultValue: false,
        NumberIsExpected: 'Một số dự kiến.',
        BooleanIsExpected: 'Một giá trị hợp lý được mong đợi.',
        DateIsExpected: 'Một ngày mong đợi.',
        Optional: 'Không bắt buộc'
    };

    var _mn = Sys.CultureInfo.CurrentCulture.dateTimeFormat.MonthNames;

    _dvr.Data = {
        ConnectionLost: 'Kết nối mạng đã bị mất. Hãy thử một lần nữa?',
        AnyValue: '(bất kì)',
        NullValue: '<span class="NA">n/a</span>',
        NullValueInForms: 'N/A',
        BooleanDefaultStyle: 'DropDownList',
        BooleanOptionalDefaultItems: [[null, 'N/A'], [false, 'Không có'], [true, 'Có']],
        BooleanDefaultItems: [[false, 'Không có'], [true, 'Có']],
        MaxReadOnlyStringLen: 600,
        NoRecords: 'Không có hồ sơ được tìm thấy.',
        BlobHandler: 'Blob.ashx',
        BlobDownloadLink: 'tải về',
        BlobDownloadLinkReadOnly: '<span style="color:gray;">tải về</span>',
        BlobDownloadHint: 'Click vào đây để tải về tập tin ban đầu.',
        BlobDownloadOriginalHint: 'Chạm vào hình ảnh để tải tập tin gốc.',
        BatchUpdate: 'cập nhật',
        NoteEditLabel: 'chỉnh sửa',
        NoteDeleteLabel: 'xóa',
        NoteDeleteConfirm: 'Xóa?',
        UseLEV: 'Dán \u0026quot;{0}\u0026quot;',
        DiscardChanges: 'Loại bỏ những thay đổi?',
        KeepOriginalSel: 'giữ lựa chọn ban đầu',
        DeleteOriginalSel: 'xóa lựa chọn ban đầu',
        Import: {
            UploadInstruction: 'Xin vui lòng chọn tập tin để tải lên. Các tập tin phải được trong \u003cb\u003eCSV\u003c/b\u003e định dạng \u003cb\u003eXLS\u003c/b\u003e, hoặc \u003cb\u003eXLSX\u003c/b\u003e,.',
            DownloadTemplate: 'Tải tập tin mẫu nhập khẩu.',
            Uploading: 'Tập tin của bạn đang được tải lên máy chủ. Xin vui lòng chờ ...',
            MappingInstruction: 'Có \u003cb\u003e{0}\u003c/b\u003e kỷ lục (s) trong những \u003cb\u003e{1}\u003c/b\u003e tập tin đã sẵn sàng để được processed.\u003cbr/\u003ePlease bản đồ các lĩnh vực nhập khẩu từ tập tin dữ liệu các lĩnh vực ứng dụng và nhấn \u003ci\u003eImport\u003c/i\u003e để bắt đầu chế biến.',
            StartButton: 'Nhập khẩu',
            AutoDetect: '(Tự động phát hiện)',
            Processing: 'Nhập khẩu xử lý tập tin đã được bắt đầu. Hồ sơ dữ liệu nhập khẩu sẽ trở nên có sẵn sau khi xử lý thành công. Bạn có thể cần phải làm mới các quan điểm có liên quan / các trang web để xem các hồ sơ nhập khẩu.',
            Email: 'Gửi các bản ghi nhập khẩu đến các địa chỉ email sau đây (tùy chọn)',
            EmailNotSpecified: 'Người nhận các bản ghi nhập khẩu chưa được quy định. Tiến hành nào?'
        },
        Filters: {
            Labels: {
                And: 'và',
                Or: 'hoặc',
                Equals: 'bằng',
                Clear: 'Rõ ràng',
                SelectAll: '(Select All)',
                Includes: 'bao gồm',
                FilterToolTip: 'Thay đổi'
            },
            Number: {
                Text: 'Số Bộ lọc',
                Kind: 'Số',
                List: [
                    { Function: '=', Text: 'Equals', Prompt: true },
                    { Function: '<>', Text: 'Không bình đẳng', Prompt: true },
                    { Function: '<', Text: 'Ít hơn', Prompt: true },
                    { Function: '>', Text: 'Lớn hơn', Prompt: true },
                    { Function: '<=', Text: 'Nhỏ hơn hoặc bằng', Prompt: true },
                    { Function: '>=', Text: 'Greater Than Or Equal', Prompt: true },
                    { Function: '$between', Text: 'Giữa', Prompt: true },
                    { Function: '$in', Text: 'Bao gồm', Prompt: true, Hidden: true },
                    { Function: '$notin', Text: 'Không bao gồm', Prompt: true, Hidden: true },
                    { Function: '$isnotempty', Text: 'Không rỗng' },
                    { Function: '$isempty', Text: 'Trống' }
                ]
            },
            Text: {
                Text: 'Văn bản Bộ lọc',
                Kind: 'Bản văn',
                List: [
                    { Function: '=', Text: 'Equals', Prompt: true },
                    { Function: '<>', Text: 'Không bình đẳng', Prompt: true },
                    { Function: '$beginswith', Text: 'Bắt đầu với', Prompt: true },
                    { Function: '$doesnotbeginwith', Text: 'Không bắt đầu bằng', Prompt: true },
                    { Function: '$contains', Text: 'Có', Prompt: true },
                    { Function: '$doesnotcontain', Text: 'Không chứa', Prompt: true },
                    { Function: '$endswith', Text: 'Kết thúc Với', Prompt: true },
                    { Function: '$doesnotendwith', Text: 'Không kết thúc bằng', Prompt: true },
                    { Function: '$in', Text: 'Bao gồm', Prompt: true, Hidden: true },
                    { Function: '$notin', Text: 'Không bao gồm', Prompt: true, Hidden: true },
                    { Function: '$isnotempty', Text: 'Không rỗng' },
                    { Function: '$isempty', Text: 'Trống' }
                ]
            },
            Boolean: {
                Text: 'Hợp lý Bộ lọc',
                Kind: 'Logical',
                List: [
                    { Function: '$true', Text: 'Có' },
                    { Function: '$false', Text: 'Không có' },
                    { Function: '$isnotempty', Text: 'Không rỗng' },
                    { Function: '$isempty', Text: 'Trống' }
                ]
            },
            Date: {
                Text: 'Ngày Bộ lọc',
                Kind: 'Ngày',
                List: [
                    { Function: '=', Text: 'Equals', Prompt: true },
                    { Function: '<>', Text: 'Không bình đẳng', Prompt: true },
                    { Function: '<', Text: 'Trước khi', Prompt: true },
                    { Function: '>', Text: 'Sau khi', Prompt: true },
                    { Function: '<=', Text: 'Bật hoặc Trước', Prompt: true },
                    { Function: '>=', Text: 'Trên hay Sau', Prompt: true },
                    { Function: '$between', Text: 'Giữa', Prompt: true },
                    { Function: '$in', Text: 'Bao gồm', Prompt: true, Hidden: true },
                    { Function: '$notin', Text: 'Không bao gồm', Prompt: true, Hidden: true },
                    { Function: '$isnotempty', Text: 'Không rỗng' },
                    { Function: '$isempty', Text: 'Trống' },
                    null,
                    { Function: '$tomorrow', Text: 'Mai' },
                    { Function: '$today', Text: 'Hôm nay' },
                    { Function: '$yesterday', Text: 'Hôm qua' },
                    null,
                    { Function: '$nextweek', Text: 'Tuần tiếp theo' },
                    { Function: '$thisweek', Text: 'Tuần này' },
                    { Function: '$lastweek', Text: 'Tuần' },
                    null,
                    { Function: '$nextmonth', Text: 'Tháng sau' },
                    { Function: '$thismonth', Text: 'Tháng này' },
                    { Function: '$lastmonth', Text: 'Tháng trước' },
                    null,
                    { Function: '$nextquarter', Text: 'Tiếp theo quý' },
                    { Function: '$thisquarter', Text: 'Quý này' },
                    { Function: '$lastquarter', Text: 'Bán nguyệt' },
                    null,
                    { Function: '$nextyear', Text: 'Vào năm tới' },
                    { Function: '$thisyear', Text: 'Năm nay' },
                    { Function: '$yeartodate', Text: 'Năm nay' },
                    { Function: '$lastyear', Text: 'Năm ngoái' },
                    null,
                    { Function: '$past', Text: 'Quá khứ' },
                    { Function: '$future', Text: 'Tương lai' },
                    null,
                    {
                        Text: 'Tất cả các Ngày trong thời kỳ',
                        List: [
                            { Function: '$quarter1', Text: 'Khu phố 1' },
                            { Function: '$quarter2', Text: 'Khu phố 2' },
                            { Function: '$quarter3', Text: 'Khu phố 3' },
                            { Function: '$quarter4', Text: 'Khu phố 4' },
                            null,
                            { Function: '$month1', Text: _mn[0] },
                            { Function: '$month2', Text: _mn[1] },
                            { Function: '$month3', Text: _mn[2] },
                            { Function: '$month4', Text: _mn[3] },
                            { Function: '$month5', Text: _mn[4] },
                            { Function: '$month6', Text: _mn[5] },
                            { Function: '$month7', Text: _mn[6] },
                            { Function: '$month8', Text: _mn[7] },
                            { Function: '$month9', Text: _mn[8] },
                            { Function: '$month10', Text: _mn[9] },
                            { Function: '$month11', Text: _mn[10] },
                            { Function: '$month12', Text: _mn[11] }
                        ]
                    }
                ]
            }
        }
    };


    _dvr.Form = {
        ShowActionBar: true,
        ShowCalendarButton: true,
        RequiredFieldMarker: '<span class="Required">*</span>',
        RequiredFiledMarkerFootnote: '* - cho biết một trường bắt buộc',
        SingleButtonRowFieldLimit: 7,
        GeneralTabText: 'Tổng',
        Minimize: 'Collapse',
        Maximize: 'Mở rộng'
    };

    _dvr.Grid = {
        InPlaceEditContextMenuEnabled: true,
        QuickFindText: 'Tìm nhanh',
        QuickFindToolTip: 'Nhập để tìm kiếm các hồ sơ và nhấn Enter',
        ShowAdvancedSearch: 'Hiển thị Tìm kiếm nâng cao',
        VisibleSearchBarFields: 3,
        DeleteSearchBarField: '(Xóa)',
        //AddSearchBarField: 'Tìm kiếm Fields',
        HideAdvancedSearch: 'Ẩn Tìm kiếm nâng cao',
        PerformAdvancedSearch: 'Tìm kiếm',
        ResetAdvancedSearch: 'Thiết lập lại',
        NewRowLink: 'Click vào đây để tạo ra một kỷ lục mới.',
        RootNodeText: 'Top Level',
        FlatTreeToggle: 'Chuyển đến Hierarchy',
        HierarchyTreeModeToggle: 'Chuyển sang Danh sách phẳng',
        AddConditionText: 'Thêm điều kiện tìm kiếm',
        AddCondition: 'Thêm Điều kiện',
        RemoveCondition: 'Hủy bỏ Điều kiện',
        ActionColumnHeaderText: 'Hoạt động',
        Aggregates: {
            None: { FmtStr: '', ToolTip: '' },
            Sum: { FmtStr: 'Tổng: {0}', ToolTip: 'Tổng của {0}' },
            Count: { FmtStr: 'Count: {0}', ToolTip: 'Count of {0}' },
            Avg: { FmtStr: 'Trung bình: {0}', ToolTip: 'Trung bình của {0}' },
            Max: { FmtStr: 'Max: {0}', ToolTip: 'Tối đa của {0}' },
            Min: { FmtStr: 'Min: {0}', ToolTip: 'Tối thiểu của {0}' }
        },
        Freeze: 'Đóng băng',
        Unfreeze: 'Làm cho lỏng ra'
    };

    _dvr.Views = {
        DefaultDescriptions: {
            '$DefaultGridViewDescription': 'Đây là một danh sách các {0}.',
            '$DefaultEditViewDescription': 'Vui lòng xem lại {0} thông tin dưới đây. Nhấp vào Chỉnh sửa để thay đổi hồ sơ này, nhấn Delete để xóa các bản ghi, hoặc nhấn vào Cancel / Close để trở về.',
            '$DefaultCreateViewDescription': 'Xin vui lòng điền mẫu này và nhấn nút OK để tạo một bản ghi {0} mới. Nhấp vào Cancel để quay trở lại màn hình trước đó.'
        },
        DefaultCategoryDescriptions: {
            '$DefaultEditDescription': 'Đây là những lĩnh vực của hồ sơ {0} rằng có thể được chỉnh sửa.',
            '$DefaultNewDescription': 'Hoàn thành mẫu đơn. Hãy chắc chắn để vào tất cả các lĩnh vực cần thiết.',
            '$DefaultReferenceDescription': 'Thêm chi tiết về {0} được cung cấp trong phần thông tin tham khảo.'
        }
    };

    _dvr.Actions = {
        Scopes: {
            'Grid': {
                'Select': {
                    HeaderText: 'Chọn'
                },
                'Edit': {
                    HeaderText: 'Chỉnh sửa'
                },
                'Delete': {
                    HeaderText: 'Xóa',
                    Confirmation: 'Xóa?',
                    Notify: 'Đã xóa {$ chọn}'
                },
                'Duplicate': {
                    HeaderText: 'Duplicate'
                },
                'New': {
                    HeaderText: 'New'
                },
                'BatchEdit': {
                    HeaderText: 'Batch Edit'
                    //                    ,CommandArgument: {
                    //                        'editForm1': {
                    //                            HeaderText: 'Batch Edit (theo mẫu)'
                    //                        }
                    //                    }
                },
                'Open': {
                    HeaderText: 'Mở'
                }
            },
            'Form': {
                'Edit': {
                    HeaderText: 'Chỉnh sửa'
                },
                'Delete': {
                    HeaderText: 'Xóa',
                    Confirmation: 'Xóa?',
                    Notify: 'Đã xóa {$ chọn}'
                },
                'Cancel': {
                    HeaderText: 'Đóng',
                    WhenLastCommandName: {
                        'Duplicate': {
                            HeaderText: 'Hủy bỏ'
                        },
                        'Edit': {
                            HeaderText: 'Hủy bỏ'
                        },
                        'New': {
                            HeaderText: 'Hủy bỏ'
                        }

                    }
                },
                'Update': {
                    HeaderText: 'OK',
                    Notify: 'Đã lưu - {0}',
                    CommandArgument: {
                        'Save': {
                            HeaderText: 'Lưu',
                            Notify: 'Đã lưu - {0}'
                        },
                        'SaveAndContinue': {
                            HeaderText: 'Lưu lại và tiếp tục',
                            Notify: 'Đã lưu - {0}'
                        }
                    },
                    WhenLastCommandName: {
                        'BatchEdit': {
                            HeaderText: 'Cập nhật lựa chọn',
                            Confirmation: 'Cập nhật?',
                            Notify: 'Đã lưu - {0}'
                        }
                    }
                },
                'Insert': {
                    HeaderText: 'OK',
                    Notify: 'Đã lưu - {0}',
                    CommandArgument: {
                        'Save': {
                            HeaderText: 'Lưu',
                            Notify: 'Đã lưu - {0}'
                        },
                        'SaveAndNew': {
                            HeaderText: 'Lưu và New',
                            Notify: 'Đã lưu - {0}'
                        }
                    }
                },
                'Confirm': {
                    HeaderText: 'OK'
                },
                'Navigate': {
                    Controller: {
                        'SiteContent': {
                            HeaderText: 'Thêm Hệ thống nhận dạng'
                        }
                    }
                }
            },
            'ActionBar': {
                _Self: {
                    'Actions': {
                        HeaderText: 'Hoạt động'
                    },
                    'Report': {
                        HeaderText: 'Báo cáo'
                    },
                    'Record': {
                        HeaderText: 'Ghi'
                    }
                },
                'New': {
                    HeaderText: 'New {0}',
                    Description: 'Tạo một kỷ lục {0} mới.',
                    HeaderText2: 'New',
                    VarMaxLen: 15
                },
                'Edit': {
                    HeaderText: 'Chỉnh sửa'
                },
                'Delete': {
                    HeaderText: 'Xóa',
                    Confirmation: 'Xóa?',
                    Notify: 'Đã xóa {$ chọn}'
                },
                'ExportCsv': {
                    HeaderText: 'Tải về',
                    Description: 'Tải về các mục trong định dạng CSV.'
                },
                'ExportRowset': {
                    HeaderText: 'Xuất để bảng tính',
                    Description: 'Phân tích mục có spreadsheet\u003cbr/\u003eapplication.'
                },
                'ExportRss': {
                    HeaderText: 'View RSS Feed',
                    Description: 'Syndicate mục với một trình đọc RSS.'
                },
                'Import': {
                    HeaderText: 'Nhập khẩu từ tập tin',
                    Description: 'Tải lên một CSV, XLS, hoặc hồ sơ nhập khẩu XLSX file\u003cbr/\u003eto.'
                },
                'Update': {
                    HeaderText: 'Lưu',
                    Description: 'Lưu các thay đổi cơ sở dữ liệu.',
                    Notify: 'Đã lưu - {0}'
                },
                'Insert': {
                    HeaderText: 'Lưu',
                    Description: 'Lưu kỷ lục mới vào cơ sở dữ liệu.',
                    Notify: 'Đã lưu - {0}'
                },
                'Cancel': {
                    HeaderText: 'Hủy bỏ',
                    WhenLastCommandName: {
                        'Edit': {
                            HeaderText: 'Hủy bỏ',
                            Description: 'Hủy bỏ tất cả thay đổi kỷ lục.'
                        },
                        'New': {
                            HeaderText: 'Hủy bỏ',
                            Description: 'Huỷ kỷ lục mới.'
                        }
                    }
                },
                'Report': {
                    HeaderText: 'Báo cáo',
                    Description: 'Render một báo cáo ở định dạng PDF'
                },
                'ReportAsPdf': {
                    HeaderText: 'PDF Document',
                    Description: 'Xem các mục như Adobe PDF document.\u003cbr/\u003eRequires một đầu đọc tương thích.'
                },
                'ReportAsImage': {
                    HeaderText: 'Nhiều trang hình ảnh',
                    Description: 'Xem các mục như là một hình ảnh TIFF nhiều trang.'
                },
                'ReportAsExcel': {
                    HeaderText: 'Bảng tính',
                    Description: 'Xem các mục trong một bảng tính Excel formatted\u003cbr/\u003eMicrosoft.'
                },
                'ReportAsWord': {
                    HeaderText: 'Microsoft Word',
                    Description: 'Xem các mục trong một tài liệu Word formatted\u003cbr/\u003eMicrosoft.'
                },
                'DataSheet': {
                    HeaderText: 'Hiển thị trong Bảng dữ liệu',
                    Description: 'Hiển thị các mục bằng cách sử dụng một sheet\u003cbr/\u003eformat dữ liệu.'
                },
                'Grid': {
                    HeaderText: 'Hiện tại Xem tiêu chuẩn',
                    Description: 'Hiển thị các mục trong các định dạng standard\u003cbr/\u003elist.'
                },
                'Tree': {
                    HeaderText: 'Hiện Hierarchy',
                    Description: 'Hiển thị các mối quan hệ thứ bậc.'
                },
                'Search': {
                    HeaderText: 'Tìm kiếm',
                    Description: 'Tìm kiếm {0}'
                },
                'Upload': {
                    HeaderText: 'Tải lên',
                    Description: 'Tải lên nhiều tập tin.'
                }
            },
            'Row': {
                'Update': {
                    HeaderText: 'Lưu',
                    Notify: 'Đã lưu - {0}',
                    WhenLastCommandName: {
                        'BatchEdit': {
                            HeaderText: 'Cập nhật lựa chọn',
                            Confirmation: 'Cập nhật?'
                        }
                    }
                },
                'Insert': {
                    HeaderText: 'Chèn',
                    Notify: 'Đã lưu - {0}'
                },
                'Cancel': {
                    HeaderText: 'Hủy bỏ'
                }
            },
            'ActionColumn': {
                'Edit': {
                    HeaderText: 'Chỉnh sửa'
                },
                'Delete': {
                    HeaderText: 'Xóa',
                    Confirmation: 'Xóa?',
                    Notify: 'Đã xóa {$ chọn}'
                }
            }
        }
    };

    _dvr.Editor = {
        Undo: 'Lùi lại',
        Redo: 'Làm lại',
        Bold: 'Đậm',
        Italic: 'Nghiêng',
        Underline: 'Nhấn mạnh',
        Strikethrough: 'Thông qua tấn công',
        Subscript: 'Phụ Script',
        Superscript: 'Siêu Script',
        JustifyLeft: 'Biện minh cho trái',
        JustifyCenter: 'Canh giữa',
        JustifyRight: 'Lề phải',
        JustifyFull: 'Biện minh cho toàn',
        InsertOrderedList: 'Danh sách thứ tự chèn',
        InsertUnorderedList: 'Danh sách không có thứ tự chèn',
        CreateLink: 'Tạo liên kết',
        UnLink: 'Tháo vải lót',
        RemoveFormat: 'Loại bỏ định dạng',
        SelectAll: 'Chọn tất cả',
        UnSelect: 'Bỏ chọn',
        Delete: 'Xóa',
        Cut: 'Cắt',
        Copy: 'Sao chép',
        Paste: 'Dán',
        BackColor: 'Trở lại màu',
        ForeColor: 'Fore màu',
        FontName: 'Tên phông chữ',
        FontSize: 'Kích thước phông chữ',
        Indent: 'Lịnh sung công',
        Outdent: 'Nhô lề',
        InsertHorizontalRule: 'Quy tắc chèn ngang',
        HorizontalSeparator: 'Phân cách',
        Format: 'định dạng',
        FormatBlock: {
            p: 'Đoạn văn',
            blockquote: 'Bảng báo giá',
            h1: 'Tiêu đề 1',
            h2: 'Tiêu đề 2',
            h3: 'Tiêu đề 3',
            h4: 'Tiêu đề 4',
            h5: 'Tiêu đề 5',
            h6: 'Tiêu đề 6'
        },
        Rtf: {
            editor: 'Toàn màn hình'
        }
    };

    _dvr.Mobile = {
        UpOneLevel: 'Lên một bậc',
        Back: 'Trở lại',
        BatchEdited: '{0} Cập nhật',
        Sort: 'Loại',
        Sorted: 'Phân loại',
        SortedDefault: 'Thứ tự sắp xếp mặc định.',
        SortByField: 'Chọn một trường để thay đổi thứ tự sắp xếp của \u003cb\u003e{0}\u003c/b\u003e.',
        SortByOptions: 'Chọn thứ tự sắp xếp của \u003cb\u003e{0}\u003c/b\u003e bởi sân \u003cb\u003e{1}\u003c/b\u003e trong danh sách các tùy chọn dưới đây.',
        DefaultOption: 'Bình thường',
        Auto: 'Xe hơi',
        Filter: 'Bộ lọc',
        List: 'Danh sách',
        Cards: 'Thẻ',
        Grid: 'Lưới',
        Map: 'Bản đồ',
        Calendar: 'Lịch',
        ZoomIn: 'Phóng to',
        ZoomOut: 'Thu nhỏ',
        Directions: 'Hướng',
        AlternativeView: 'Chọn một cách nhìn khác về dữ liệu.',
        PresentationStyle: 'Chọn một phong cách trình bày dữ liệu.',
        LookupViewAction: 'Xem',
        LookupSelectAction: 'Chọn',
        LookupClearAction: 'Rõ ràng',
        LookupNewAction: 'New',
        LookupInstruction: 'Vui lòng chọn \u003cb\u003e{0}\u003c/b\u003e trong danh sách.',
        LookupOriginalSelection: 'Việc lựa chọn ban đầu là \u003cb\u003e\u0026quot;{0}\u0026quot;\u003c/b\u003e.',
        EmptyContext: 'Hành động không có sẵn.',
        Favorites: 'Yêu thích',
        History: 'Lịch sử',
        FilterSiteMap: 'Bản đồ trang web lọc...',
        ResumeLookup: 'Tiếp tục Lookup',
        ResumeEntering: 'Bước tiếp tục',
        ResumeEditing: 'Tiếp tục chỉnh sửa',
        ResumeBrowsing: 'Tiếp tục duyệt',
        ResumeViewing: 'Xem lại',
        Menu: 'Đơn',
        Home: 'Quê hương',
        Settings: 'Thiết lập',
        Sidebar: 'Sidebar',
        Landscape: 'Cảnh',
        Portrait: 'Chân dung',
        Never: 'Không bao giờ',
        Always: 'Luôn luôn',
        ShowSystemButtons: 'Buttons Hiện hệ thống',
        OnHover: 'Mở Hover',
        ButtonShapes: 'Hình dạng nút',
        PromoteActions: 'Thúc đẩy hành động',
        ConfirmReload: 'Nạp lại?',
        ClearText: 'Tiêu đề rõ ràng',
        SeeAll: 'Xem tất cả',
        More: 'Hơn',
        TouchUINotSupported: 'Giao diện cảm ứng không được hỗ trợ trong trình duyệt này.',
        ShowingItemsInfo: 'Hiện {0} mục.',
        FilterByField: 'Chọn một lĩnh vực để áp dụng một bộ lọc để \u003cb\u003e{0}\u003c/b\u003e.',
        Apply: 'Áp dụng',
        FilterByOptions: 'Chọn một hoặc nhiều lựa chọn trong danh sách dưới đây và nhấn \u003cb\u003e{2}\u003c/b\u003e để lọc \u003cb\u003e{0}\u003c/b\u003e bởi lĩnh vực này \u003cb\u003e{1}\u003c/b\u003e.',
        Suggestions: 'Gợi ý',
        UnSelect: 'Bỏ chọn',
        AdvancedSearch: 'Tìm kiếm nâng cao',
        QuickFindScope: 'Tìm kiếm trong ...',
        QuickFindDescription: 'Tìm kiếm ở {0}',
        AddMatchingGroup: 'Thêm nhóm phù hợp với',
        MatchAll: 'Phù hợp với tất cả các điều kiện',
        MatchAny: 'Phù hợp với bất kỳ điều kiện',
        DoNotMatchAll: 'Không phù hợp với tất cả các điều kiện',
        DoNotMatchAny: 'Không phù hợp với bất kỳ điều kiện',
        MatchAllPastTense: 'Phù hợp với tất cả các điều kiện',
        MatchAnyPastTense: 'Phù hợp với bất kỳ điều kiện',
        DoNotMatchAllPastTense: 'Không phù hợp với tất cả các điều kiện',
        DoNotMatchAnyPastTense: 'Không phù hợp với bất kỳ điều kiện',
        In: 'trong',
        Recent: 'Mới đây',
        Matched: 'Phù hợp',
        DidNotMatch: 'Không phù hợp',
        ClearFilter: 'Rõ ràng Lọc',
        ResetSearchConfirm: 'Đặt lại các điều kiện tìm kiếm?',
        FilterCleared: 'Đã xóa tất cả bộ lọc.',
        AdvancedSearchInstruction: 'Nhập điều kiện đó phải phù hợp và nút tìm kiếm báo chí.',
        Refreshed: 'Đã làm mới',
        Group: 'Nhóm',
        Grouped: 'Nhóm',
        UnGrouped: 'Nhóm đã được gỡ bỏ',
        GroupedBy: 'Được nhóm theo',
        GroupByField: 'Chọn một lĩnh vực để nhóm \u003cb\u003e{0}\u003c/b\u003e.',
        Show: 'Chỉ',
        Hide: 'Ẩn giấu',
        None: 'Không ai',
        Next: 'Bên cạnh',
        Prev: 'Prev',
        FitToWidth: 'Vừa với chiều rộng',
        MultiSelection: 'Lựa chọn nhiều',
        InlineEditing: 'Chỉnh sửa Nội tuyến',
        ItemsSelectedOne: '{0} Mục được chọn',
        ItemsSelectedMany: '{0} Mục đã chọn',
        TypeToSearch: 'Nhập tìm kiếm',
        NoMatches: 'Không có trận đấu.',
        ShowingItemsRange: 'Hiển thị {0} {1} của mục',
        Finish: 'Hoàn thành',
        ShowOptions: 'Show Options',
        ConfirmContinue: 'Tiếp tục?',
        AddAccount: 'Thêm tài khoản',
        Fullscreen: 'Toàn màn hình',
        ExitFullscreen: 'Thoát toàn màn hình',
        Apps: 'Apps',
        Forget: 'Quên',
        ManageAccounts: 'Quản lý tài khoản',
        SignedOut: 'Đã đăng xuất',
        Submit: 'Đệ trình',
        Error: 'lỗi',
        Line: 'Hàng',
        Download: 'Tải về',
        Orientation: 'Sự định hướng',
        Device: 'Thiết bị',
        ShowMore: 'Cho xem nhiều hơn',
        ShowLess: 'Hiện ít hơn',
        WithSpecifiedFilters: 'Với các bộ lọc được chỉ định',
        WithSelectedValues5: 'Với các giá trị được chọn (Top 5)',
        WithSelectedValues10: 'Với các giá trị được chọn (Top 10)',
        ReadOnly: '{0} là chỉ đọc.',
        ScanToConfirm: 'Vui lòng quét lại để xác nhận.',
        Reading: 'Đọc hiểu...',
        ReadingPane: 'Ngăn đọc',
        AutoOpenNextItem: 'Tự động mở mục tiếp theo',
        InlineCommands: {
            List: {
                Select: 'Chọn mục',
                Edit: 'Chỉnh sửa mục',
                New: 'Vật phẩm mới',
                Duplicate: 'Mục trùng lặp',
            },
            Grid: {
                Select: 'Chọn hàng',
                Edit: 'Chỉnh sửa hàng',
                New: 'Hàng mới',
                Duplicate: 'Hàng trùng lặp',
            }
        },
        DisplayDensity: {
            Label: 'Mật độ hiển thị',
            List: {
                Tiny: 'Nhỏ bé',
                Condensed: 'Đặc',
                Compact: 'Nhỏ gọn',
                Comfortable: 'Thoải mái'
            }
        },
        Files: {
            KB: 'KB',
            MB: 'KB',
            Bytes: 'byte',
            Drop: 'Thả một tập tin ở đây',
            DropMany: 'Thả các tập tin ở đây',
            Tap: 'Bấm để chọn một tập tin',
            TapMany: 'Bấm để chọn file',
            Click: 'Nhấn vào đây để chọn một tập tin',
            ClickMany: 'Nhấn vào đây để chọn các tập tin',
            Clear: 'Trong sáng',
            ClearConfirm: 'Rõ ràng?',
            Sign: 'Đăng ở đây',
            Cleared: 'Giá trị sẽ bị xóa khi lưu'
        },
        Import: {
            SelectFile: 'Chọn một tập tin dữ liệu trong CSV, XLS, XLSX hoặc định dạng.',
            NotSupported: 'định dạng dữ liệu của \u0026quot;{0}\u0026quot; không được hỗ trợ.',
            NotMatched: '(không phù hợp)',
            FileStats: 'Có hồ sơ \u003cb\u003e{0}\u003c/b\u003e trong file \u003cb\u003e{1}\u003c/b\u003e sẵn sàng để được xử lý. Hãy kết hợp các tên trường.',
            Importing: 'nhập khẩu',
            Into: 'trong',
            StartImport: 'Bắt đầu nhập',
            InsertingRecords: 'chèn hồ sơ',
            TestingRecords: 'biên bản thử nghiệm',
            ResolvingReferences: 'giải quyết tài liệu tham khảo',
            Complete: 'hoàn thành',
            Expected: 'Dự kiến ​​sẽ hoàn thành',
            Remaining: 'Dự kiến ​​sẽ hoàn thành',
            Done: 'nhập khẩu đã hoàn thành',
            Duplicates: 'Bản sao'
        },
        Themes: {
            Label: 'Chủ đề',
            Accent: 'giọng',
            List: {
                None: 'không ai',
                Light: 'Ánh sáng',
                Dark: 'Tối',
                Aquarium: 'Hồ cá',
                Azure: 'Nhuộm',
                Belltown: 'Belltown',
                Berry: 'Berry',
                Bittersweet: 'Buồn vui lẫn lộn',
                Cay: 'Cồn san hô',
                Citrus: 'Citrus',
                Classic: 'Cổ điển',
                Construct: 'Xây dựng',
                Convention: 'Ước',
                DarkKnight: 'Dark Knight',
                Felt: 'Cảm thấy',
                Graham: 'Graham',
                Granite: 'Đá granit',
                Grapello: 'Grapello',
                Gravity: 'Nguy cơ',
                Lacquer: 'Sơn mài',
                Laminate: 'Laminate',
                Lichen: 'Một loài rêu',
                Mission: 'Nhiệm vụ',
                Modern: 'Hiện đại',
                ModernRose: 'Rose hiện đại',
                Municipal: 'Thành phố',
                Petal: 'Cánh hoa',
                Pinnate: 'Chung quanh lá cuống',
                Plastic: 'Nhựa',
                Ricasso: 'Ricasso',
                Simple: 'Đơn giản',
                Social: 'Xã hội',
                Summer: 'Mùa hè',
                Vantage: 'Điều lợi',
                Verdant: 'Cỏ xanh tươi',
                Viewpoint: 'Quan điểm',
                WhiteSmoke: 'Trắng khói',
                Yoshi: 'Yoshi'
            }
        },
        Transitions: {
            Label: 'Quá trình chuyển đổi',
            List: {
                none: 'Không ai',
                slide: 'Trượt',
                fade: 'Phai',
                pop: 'Pop',
                flip: 'Lật',
                turn: 'Phiên',
                flow: 'Dòng chảy',
                slideup: 'Slide Up',
                slidedown: 'Trượt xuống'
            }
        },
        LabelsInList: {
            Label: 'Nhãn Trong Danh sách',
            List: {
                DisplayedAbove: 'Hiển thị trên',
                DisplayedBelow: 'Dưới đây hiển thị'
            }
        },
        InitialListMode: {
            Label: 'Danh sách ban đầu chế độ',
            List: {
                SeeAll: 'Xem tất cả',
                Summary: 'Tóm tắt thông tin'
            }
        },
        Dates: {
            SmartDates: 'Ngày thông minh',
            Yesterday: 'hôm qua',
            Last: 'Cuối cùng',
            Today: 'hôm nay',
            OneHour: 'Một tiếng trước',
            MinAgo: '{0} Phút trước',
            AMinAgo: 'một phút trước',
            InHour: 'trong một tiếng nữa',
            InMin: 'trong {0} phút',
            InAMin: 'trong một phút',
            Now: 'hiện nay',
            JustNow: 'chỉ cần bây giờ',
            Tomorrow: 'Ngày mai',
            Next: 'Kế tiếp'
        },
        Sync: {
            Uploading: 'Đang tải lên'
        },
        Develop: {
            Tools: 'Những công cụ phát triển',
            Explorer: 'Project Explorer',
            FormLayout: 'Giao diện Mẫu',
            FormLayoutInstr: 'Chọn kích cỡ màn hình để được bao gồm trong bố cục.'
        },
        Keyboard: {
            TelHints: {
                Key1: ' ',
                Key2: 'abc',
                Key3: 'def',
                Key4: 'ghi',
                Key5: 'jkl',
                Key6: 'mno',
                Key7: 'pqrs',
                Key8: 'tuv',
                Key9: 'wxyz'
            }
        }
    };

    _dvr.ODP = {
        Initializing: 'Đang khởi tạo ...',
        Status: 'Trạng thái',
        Sync: 'Làm cho đồng bộ',
        Synced: 'Đã đồng bộ hóa',
        SyncLong: 'Đồng bộ hóa để tải lên các thay đổi.',
        SyncLast: 'Đồng bộ hóa lần cuối',
        Committing: 'Đang tải lên giao dịch ...',
        SyncUploadingFiles: 'Đang tải lên ...',
        SyncUploadFailed: 'Không thể tải lên các tập tin {0}.',
        UploadingFiles: 'Đang tải lên các tập tin {0} ...',
        UploadFailed: 'Không thể tải lên tập tin.',
        Pending: 'Các thay đổi đang chờ xử lý',
        DownloadingData: 'Đang tải xuống dữ liệu cho {0}...',
        DownloadingBlob: 'Tải xuống dữ liệu nhị phân cho {0}...',
        UnableToExec: 'Không thể thực hiện.',
        UnableToProcess: 'Không thể xử lý giao dịch.',
        UnableToSave: 'Không thể lưu thay đổi.',
        UnableToDelete: 'Không thể xóa. {1} các mục phụ thuộc trong {0}.',
        Save: 'Hãy lưu tất cả các thay đổi.',
        SaveAndSync: 'Lưu tất cả các thay đổi và chọn tùy chọn Đồng bộ hóa trong menu ngữ cảnh.',
        OnlineRequired: 'Kết nối trực tuyến là bắt buộc.',
        OfflineState: 'Bạn đang làm việc trong chế độ ngoại tuyến.',
        InvalidResponse: 'Phản hồi không hợp lệ từ máy chủ.',
        ReconRequired: 'Cần có sự hòa giải',
        ReconTxDelete: 'Xóa thay đổi này khỏi nhật ký?',
        ReconTxDeleted: 'Đã xóa giao dịch đang chờ xử lý đầu tiên trong nhật ký.',
        NotRefreshed: 'Dữ liệu chưa được làm mới.',
        LastRefresh: 'Làm mới lần cuối: {0}.',
        ServerUnavailable: 'Máy chủ ứng dụng không có sẵn.',
        Refresh: 'Làm mới dữ liệu',
        RefreshLast: 'Dữ liệu được làm mới',
        RefreshData: 'Làm mới dữ liệu',
        Done: 'Làm xong.'
    };

    _dvr.Device = {
        Exit: 'Lối thoát',
        DeviceLoginPrompt: 'Hãy đăng nhập để cho phép truy cập vào thiết bị này.'
    };

    _dvr.Presenters = {
        Charts: {
            Text: 'Bảng xếp hạng',
            DataWarning: 'Số lượng tối đa của các mục để quá trình là {0: d}. Nhấn vào đây để lọc kết quả.',
            ShowData: 'Hiển thị dữ liệu',
            ShowChart: 'Hiện Chart',
            Sizes: {
                Label: 'Kích thước',
                Small: 'Nhỏ',
                Medium: 'Trung bình',
                Large: 'Lớn'
            },
            ChartLabels: {
                By: 'qua',
                Top: 'đỉnh',
                Other: 'Khác',
                Blank: 'Trắng',
                GrandTotals: 'Đại Totals',
                CountOf: 'Tính của',
                SumOf: 'Sum của',
                AvgOf: 'Trung bình',
                MinOf: 'Tối thiểu',
                MaxOf: 'Tối đa',
                Quarter: 'Phần tư',
                Week: 'Tuần'
            }
        },
        Calendar: {
            Text: 'Lịch',
            Today: 'Hôm nay',
            Noon: 'Buổi trưa',
            Year: 'Năm',
            Month: 'Tháng',
            Week: 'Tuần',
            Day: 'Ngày',
            Agenda: 'Chương trình nghị sự',
            Sync: 'Đồng bộ hóa',
            Less: 'Ít hơn'
        }
    };

    // membership resources

    var _mr = Web.MembershipResources = {};

    _mr.Bar = {
        LoginLink: 'Đăng nhập',
        LoginText: ' trang web này',
        HelpLink: 'Trợ giúp',
        UserName: 'User Name:',
        Password: 'Mật khẩu:',
        RememberMe: 'Ghi nhớ lần sau',
        ForgotPassword: 'Quên mật khẩu của bạn?',
        SignUp: 'Đăng ký ngay',
        LoginButton: 'Đăng nhập',
        MyAccount: 'Tài khoản của tôi',
        LogoutLink: 'Đăng xuất',
        HelpCloseButton: 'Đóng',
        HelpFullScreenButton: 'Full Screen',
        UserIdle: 'Bạn vẫn có? Xin vui lòng đăng nhập lại.',
        History: 'Lịch sử',
        Permalink: 'Cố định',
        AddToFavorites: 'Thêm vào yêu thích',
        RotateHistory: 'Quay',
        Welcome: 'Chào mừng <b>{0}</b>, Hôm nay là {1:D}',
        ChangeLanguageToolTip: 'Thay đổi ngôn ngữ của bạn',
        PermalinkToolTip: 'Tạo một liên kết thường trực cho các hồ sơ được lựa chọn',
        HistoryToolTip: 'Xem lịch sử của các hồ sơ đã chọn trước đó',
        AutoDetectLanguageOption: 'Auto Detect'
    };

    _mr.Messages = {
        InvalidUserNameAndPassword: 'Tên người dùng và mật khẩu không hợp lệ.',
        BlankUserName: 'Tên người dùng không được để trống.',
        BlankPassword: 'Mật khẩu không được để trống.',
        PermalinkUnavailable: 'Đường dẫn cố định là không có sẵn. Hãy chọn một kỷ lục.',
        HistoryUnavailable: 'Lịch sử là không có sẵn.'
    };

    _mr.Manager = {
        UsersTab: 'Người sử dụng',
        RolesTab: 'Vai trò',
        UsersInRole: 'Người sử dụng trong vai trò'
    };

    if (typeof Sys !== 'undefined') Sys.Application.notifyScriptLoaded();
})();
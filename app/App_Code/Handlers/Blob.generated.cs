namespace GiaPhuocSME.Handlers
{


    public partial class BlobFactoryConfig : BlobFactory
    {

        public static void Initialize()
        {
            // register blob handlers
            RegisterHandler("CustomerDocumentDocumentFront", "\"dbo\".\"CustomerDocument\"", "\"DocumentFront\"", new string[] {
                        "\"ID\""}, "Customer Document Mặt trước", "CustomerDocument", "DocumentFront");
            RegisterHandler("CustomerDocumentDocumentBack", "\"dbo\".\"CustomerDocument\"", "\"DocumentBack\"", new string[] {
                        "\"ID\""}, "Customer Document Mặt sau", "CustomerDocument", "DocumentBack");
        }
    }
}

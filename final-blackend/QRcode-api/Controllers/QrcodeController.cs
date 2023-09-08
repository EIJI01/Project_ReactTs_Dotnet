using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Drawing;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using QRcode_api.Dto;
using QRCoder;

namespace QRcode_api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class QrcodeController : Controller
    {
        private byte[] ImageToByteArray(System.Drawing.Image img)
        {
            using (MemoryStream stream = new MemoryStream())
            {
                img.Save(stream, System.Drawing.Imaging.ImageFormat.Jpeg);
                return stream.ToArray();
            }
        }

        [HttpPost("GenerateQRCode")]
        public ActionResult GenerateQRCode([FromBody] RequestData req)
        {
            QRCodeGenerator qRCodeGenerator = new QRCodeGenerator();
            QRCodeData qRCodeData = qRCodeGenerator.CreateQrCode(req.QRCodeText, QRCodeGenerator.ECCLevel.Q);
            QRCode qRCode = new QRCode(qRCodeData);
            Bitmap qrCodeImage = qRCode.GetGraphic(15);

            var bitmapBytes = ImageToByteArray(qrCodeImage);
            return File(bitmapBytes, "Image/jpg");
        }
    }

}
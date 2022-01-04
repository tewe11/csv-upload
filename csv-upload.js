window.csvupload = window.csvupload || {};
window.csvupload.upload = {
    config: {
        "app": "upload",
        "shop": "csvupload.myshopify.com",
        "url": "https://www.csvupload.app",
        "api": "https://api.csvupload.app",
        "assets": "https://cdn.jsdelivr.net/gh/csvupload-app/cdn@0.3.124",
        "mode": "dev",
        "currencyFormats": {
            "moneyFormat": "${{amount}}",
            "moneyWithCurrencyFormat": "${{amount}} USD"
        },
        "resources": ["https://cdn.jsdelivr.net/gh/tewe11/csv-upload@0.0.1/static/csv-upload.css", "https://cdn.jsdelivr.net/gh/tewe11/csv-upload@0.0.1/static/csv-upload.js"],
        "locale": "en",
        "i18n": {
            "upload.config.image.editor.color.exposure": "Exposure",
            "upload.config.file.load.error": "Error during load",
            "upload.config.file.size.notavailable": "Size not available",
            "upload.config.error.required": "Please upload a file",
            "upload.config.image.editor.crop.rotate.right": "Rotate right",
            "upload.config.file.button.undo": "Undo",
            "upload.config.error.fileCountMin": "Please upload at least {min} file(s)",
            "upload.config.image.resolution.expected.min": "Minimum resolution is {minResolution}",
            "upload.config.file.upload.error.revert": "Error during revert",
            "upload.config.image.size.tobig": "Image is too big",
            "upload.config.image.editor.resize.height": "Height",
            "upload.config.error.inapp": "Upload error",
            "upload.config.image.editor.crop.aspect.ratio": "Aspect ratio",
            "upload.config.image.editor.button.cancel": "Cancel",
            "upload.config.image.editor.status.error": "Error loading image…",
            "upload.config.file.button.retry": "Retry",
            "upload.config.error.fileCountMax": "Please upload at most {max} file(s)",
            "upload.config.image.editor.util.markup.text": "Text",
            "upload.config.image.ratio.expected": "Expected image ratio {ratio}",
            "upload.config.file.button.remove": "Remove",
            "upload.config.image.resolution.expected.max": "Maximum resolution is {maxResolution}",
            "upload.config.error.inapp.facebook": "Please open the page outside of Facebook",
            "upload.config.image.editor.util.markup.size": "Size",
            "upload.config.image.size.expected.max": "Maximum size is {maxWidth} × {maxHeight}",
            "upload.config.image.editor.util.markup.select": "Select",
            "upload.config.file.uploading": "Uploading",
            "upload.config.image.editor.resize.width": "Width",
            "upload.config.image.editor.crop.flip.horizontal": "Flip horizontal",
            "upload.config.file.link": "\uD83D\uDD17",
            "upload.config.image.editor.status.loading": "Loading image…",
            "upload.config.image.editor.status.processing": "Processing image…",
            "upload.config.file.loading": "Loading",
            "upload.config.file.upload.canceled": "Upload cancelled",
            "upload.config.file.upload.cancel": "tap to cancel",
            "upload.config.image.editor.crop.rotate.left": "Rotate left",
            "upload.config.file.type.notallowed": "File type not allowed",
            "upload.config.file.type.expected": "Expects {lastType}",
            "upload.config.image.editor.util.markup": "Markup",
            "upload.config.file.button.cancel": "Cancel",
            "upload.config.image.editor.status.waiting": "Waiting for image…",
            "upload.config.file.upload.retry": "tap to retry",
            "upload.config.image.editor.resize.apply": "Apply",
            "upload.config.image.editor.color.contrast": "Contrast",
            "upload.config.file.size.tobig": "File is too large",
            "upload.config.dragdrop": "Drag & Drop your files or <u>Browse</u>",
            "upload.config.file.upload.undo": "tap to undo",
            "upload.config.image.editor.color.saturation": "Saturation",
            "upload.config.file.button.upload": "Upload",
            "upload.config.file.size.waiting": "Waiting for size",
            "upload.config.image.editor.util.color": "Colors",
            "upload.config.error.inputs": "Please fill in all required input fields",
            "upload.config.image.editor.util.markup.circle": "Circle",
            "upload.config.image.type.notsupported": "Image type not supported",
            "upload.config.image.editor.crop.flip.vertical": "Flip vertical",
            "upload.config.image.size.expected.min": "Minimum size is {minWidth} × {minHeight}",
            "upload.config.image.editor.button.reset": "Reset",
            "upload.config.image.ratio.invalid": "Image ratio does not match",
            "upload.config.error.ready": "Please wait for the upload to complete",
            "upload.config.image.editor.crop.zoom": "Zoom",
            "upload.config.file.upload.error.remove": "Error during remove",
            "upload.config.image.editor.util.markup.remove": "Remove",
            "upload.config.image.resolution.max": "Image resolution too high",
            "upload.config.image.editor.util.crop": "Crop",
            "upload.config.image.editor.color.brightness": "Brightness",
            "upload.config.image.editor.util.markup.draw": "Draw",
            "upload.config.image.editor.util.resize": "Resize",
            "upload.config.file.upload.error": "Error during upload",
            "upload.config.image.editor.util.filter": "Filter",
            "upload.config.file.upload.complete": "Upload complete",
            "upload.config.error.inapp.instagram": "Please open the page outside of Instagram",
            "upload.config.image.editor.util.markup.arrow": "Arrow",
            "upload.config.file.size.max": "Maximum file size is {filesize}",
            "upload.config.image.resolution.min": "Image resolution is too low",
            "upload.config.image.editor.util.markup.square": "Square",
            "upload.config.image.size.tosmall": "Image is too small",
            "upload.config.file.button.abort": "Abort",
            "upload.config.image.editor.button.confirm": "Upload"
        },
        "level": 4,
        "version": "0.3.124",
        "setup": true,
        "link": true,
        "fields": [{
            "uuid": "claa5822d2",
            "required": true,
            "hidden": false,
            "field": "image",
            "propertyTransform": true,
            "fieldProperty": "properties",
            "fieldId": "_cl-upload",
            "fieldThumbnail": "_thumbnail",
            "fieldThumbnailPreview": false,
            "className": "",
            "label": "Upload Image",
            "text": "Drag & Drop Image or <u>Browse</u>",
            "selector": "",
            "conditionMode": 1,
            "conditions": [{
                "field": "product",
                "operator": "equals",
                "value": "",
                "objects": [{
                    "id": "4478704943149",
                    "title": "Personalized Canvas",
                    "handle": null
                }],
                "tags": null
            }],
            "styles": {
                "file-grid": "0",
                "font-family": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\nHelvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',\n'Segoe UI Symbol'",
                "input-order": "top",
                "label-color": "#555",
                "file-counter": "0",
                "input-margin": "10.0px",
                "buttons-color": "#fff",
                "label-font-size": "16.0px",
                "label-color-drop": "#ffffff",
                "area-border-radius": "5.0px",
                "file-border-radius": "5.0px",
                "label-font-size-drop": "18.0px",
                "area-background-color": "#1E73BD",
                "file-background-color": "#e6ecff",
                "buttons-background-color": "#1E73BD",
                "upload-error-background-color": "#c44e47",
                "upload-success-background-color": "#36a8de"
            },
            "theme": "ocean",
            "css": "#claa5822d2 .cl-hide{display:none!important}#claa5822d2 .cl-upload--label{color:#555;font-size:16px;display:block}#claa5822d2 .cl-upload--input-field{margin-bottom:10px}#claa5822d2 .cl-upload--input{width:100%;box-sizing:border-box;padding:10px 18px;margin:0;border:1px solid #1e73bd;border-radius:5px}#claa5822d2 input[type=checkbox].cl-upload--input,#claa5822d2 input[type=radio].cl-upload--input{width:1.2em;cursor:pointer}#claa5822d2 input[type=radio].cl-upload--input{vertical-align:middle;margin-right:10px}#claa5822d2 input[type=color].cl-upload--input{width:40px;height:40px;cursor:pointer;padding:0;border:0}#claa5822d2 input[type=radio]+.cl-upload-color-rect{margin-right:10px;margin-bottom:10px}#claa5822d2 input[type=radio]:checked+.cl-upload-color-rect{border:2px solid #404040}#claa5822d2 .cl-upload-color-rect{width:30px;height:30px;display:inline-block;vertical-align:middle;border-radius:3px}#claa5822d2 .cl-upload--invalid{border-color:#b7423b}#claa5822d2 .cl-upload--errors{overflow:hidden;transition:max-height 2s ease-out;max-height:0}#claa5822d2 .cl-upload--errors.open{max-height:400px}#claa5822d2 .cl-upload--error{text-align:center;font-size:14px;cursor:pointer;position:relative;opacity:1;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol';box-sizing:border-box;color:#fff;background-color:#c44e47;padding:.3rem .7rem;margin-bottom:.7rem;border:1px solid transparent;border-color:#b7423b;border-radius:5px}#claa5822d2 .cl-upload--error:after{content:'x';position:absolute;right:1rem;top:.25rem}#claa5822d2 .cl-upload--error.dismissed{opacity:0;transition:opacity .3s ease-out}#claa5822d2 .filepond--root{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'}#claa5822d2 .filepond--file-action-button{cursor:pointer;min-height:auto!important;height:1.625em}#claa5822d2 .filepond--drop-label{color:#fff}#claa5822d2 .filepond--drop-label label{cursor:pointer;width:auto!important;height:auto!important;position:relative!important;color:#fff!important;font-size:18px!important}#claa5822d2 .filepond--drop-label u{cursor:pointer;text-decoration-color:#fff}#claa5822d2 .filepond--label-action{text-decoration-color:#fff}#claa5822d2 .filepond--panel-root{background-color:#1e73bd!important}#claa5822d2 .filepond--panel-root{border-radius:5px}#claa5822d2 .filepond--item-panel,#claa5822d2 .filepond--file-poster-wrapper,#claa5822d2 .filepond--image-preview-wrapper{border-radius:5px}#claa5822d2 .filepond--item-panel{background-color:#e6ecff!important}#claa5822d2 .filepond--drip-blob{background-color:#999}#claa5822d2 .filepond--file-action-button{background-color:#1e73bd}#claa5822d2 .filepond--file-action-button{color:#fff}#claa5822d2 .filepond--file-action-button:hover,#claa5822d2 .filepond--file-action-button:focus{box-shadow:0 0 0 .125em #fff}#claa5822d2 .filepond--file{color:#000;font-size:16px}#claa5822d2 [data-filepond-item-state*='error'] .filepond--item-panel,#claa5822d2 [data-filepond-item-state*='invalid'] .filepond--item-panel{background-color:#c44e47!important}#claa5822d2 [data-filepond-item-state*='invalid'] .filepond--file{color:#fff}#claa5822d2 [data-filepond-item-state='processing-complete'] .filepond--item-panel{background-color:#36a8de!important}#claa5822d2 [data-filepond-item-state='processing-complete'] .filepond--file{color:#fff}#claa5822d2 .filepond--image-preview-overlay-idle{color:rgba(128,158,255,0.8)}#claa5822d2 .filepond--image-preview{background-color:#e6ecff}#claa5822d2 .filepond--image-preview-overlay-success{color:#36a8de}#claa5822d2 .filepond--image-preview-overlay-failure{color:#c44e47}",
            "fileMimeTypes": ["image/png", "image/jpeg", "application/pdf"],
            "fileMimeTypesValidate": true,
            "fileSizeMaxPlan": 5000,
            "fileMultiple": false,
            "fileCountMin": 0,
            "fileCountMax": 10,
            "fileCounter": false,
            "fileFetch": true,
            "fileSubmitRemove": true,
            "fileSubmitClear": false,
            "fileGrid": false,
            "imagePreview": false,
            "imageSizeValidate": true,
            "imageWidthMin": 50,
            "imageWidthMax": 50000,
            "imageHeightMin": 50,
            "imageHeightMax": 50000,
            "imageThumbnail": true,
            "imageThumbnailWidth": 500,
            "imageThumbnailHeight": 500,
            "fieldPdf": "",
            "pdfConvert": false,
            "pdfOriginal": true,
            "serverTransform": false,
            "imageOriginal": false,
            "imageEditor": true,
            "imageEditorOpen": true,
            "imageEditorCropRestrict": true,
            "imageEditorCropRatios": [{
                "label": "Free",
                "value": ""
            }],
            "imageEditorUtils": ["crop"],
            "inputFields": [],
            "variantConfigs": [],
            "variantConfig": false
        }, {
            "uuid": "cl124cab08",
            "required": true,
            "hidden": false,
            "field": "attachments",
            "propertyTransform": true,
            "fieldProperty": "contact",
            "fieldId": "_cl-upload",
            "fieldThumbnail": "_thumbnail",
            "fieldThumbnailPreview": false,
            "className": "miki4you",
            "label": "Attachments",
            "text": "",
            "selector": ".quote-attachments",
            "conditionMode": 0,
            "conditions": [],
            "styles": {
                "file-grid": "0",
                "font-family": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\nHelvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',\n'Segoe UI Symbol'",
                "input-order": "top",
                "label-color": "#555",
                "file-counter": "0",
                "input-margin": "10.0px",
                "buttons-color": "#fff",
                "label-font-size": "16.0px",
                "label-color-drop": "#555",
                "area-border-radius": "5.0px",
                "file-border-radius": "5.0px",
                "label-font-size-drop": "16.0px",
                "area-background-color": "#eee",
                "file-background-color": "#555",
                "buttons-background-color": "rgba(0,0,0,0.5)",
                "upload-error-background-color": "#FF0000",
                "upload-success-background-color": "#008000"
            },
            "theme": "default",
            "css": "#cl124cab08 .cl-hide{display:none!important}#cl124cab08 .cl-upload--label{color:#555;font-size:16px;display:block}#cl124cab08 .cl-upload--input-field{margin-bottom:10px}#cl124cab08 .cl-upload--input{width:100%;box-sizing:border-box;padding:10px 18px;margin:0;border:1px solid #eee;border-radius:5px}#cl124cab08 input[type=checkbox].cl-upload--input,#cl124cab08 input[type=radio].cl-upload--input{width:1.2em;cursor:pointer}#cl124cab08 input[type=radio].cl-upload--input{vertical-align:middle;margin-right:10px}#cl124cab08 input[type=color].cl-upload--input{width:40px;height:40px;cursor:pointer;padding:0;border:0}#cl124cab08 input[type=radio]+.cl-upload-color-rect{margin-right:10px;margin-bottom:10px}#cl124cab08 input[type=radio]:checked+.cl-upload-color-rect{border:2px solid #404040}#cl124cab08 .cl-upload-color-rect{width:30px;height:30px;display:inline-block;vertical-align:middle;border-radius:3px}#cl124cab08 .cl-upload--invalid{border-color:#e60000}#cl124cab08 .cl-upload--errors{overflow:hidden;transition:max-height 2s ease-out;max-height:0}#cl124cab08 .cl-upload--errors.open{max-height:400px}#cl124cab08 .cl-upload--error{text-align:center;font-size:14px;cursor:pointer;position:relative;opacity:1;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol';box-sizing:border-box;color:#fff;background-color:#f00;padding:.3rem .7rem;margin-bottom:.7rem;border:1px solid transparent;border-color:#e60000;border-radius:5px}#cl124cab08 .cl-upload--error:after{content:'x';position:absolute;right:1rem;top:.25rem}#cl124cab08 .cl-upload--error.dismissed{opacity:0;transition:opacity .3s ease-out}#cl124cab08 .filepond--root{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'}#cl124cab08 .filepond--file-action-button{cursor:pointer;min-height:auto!important;height:1.625em}#cl124cab08 .filepond--drop-label{color:#555}#cl124cab08 .filepond--drop-label label{cursor:pointer;width:auto!important;height:auto!important;position:relative!important;color:#555!important;font-size:16px!important}#cl124cab08 .filepond--drop-label u{cursor:pointer;text-decoration-color:#555}#cl124cab08 .filepond--label-action{text-decoration-color:#555}#cl124cab08 .filepond--panel-root{background-color:#eee!important}#cl124cab08 .filepond--panel-root{border-radius:5px}#cl124cab08 .filepond--item-panel,#cl124cab08 .filepond--file-poster-wrapper,#cl124cab08 .filepond--image-preview-wrapper{border-radius:5px}#cl124cab08 .filepond--item-panel{background-color:#555!important}#cl124cab08 .filepond--drip-blob{background-color:#999}#cl124cab08 .filepond--file-action-button{background-color:rgba(0,0,0,0.5)}#cl124cab08 .filepond--file-action-button{color:#fff}#cl124cab08 .filepond--file-action-button:hover,#cl124cab08 .filepond--file-action-button:focus{box-shadow:0 0 0 .125em #fff}#cl124cab08 .filepond--file{color:#fff;font-size:16px}#cl124cab08 [data-filepond-item-state*='error'] .filepond--item-panel,#cl124cab08 [data-filepond-item-state*='invalid'] .filepond--item-panel{background-color:#f00!important}#cl124cab08 [data-filepond-item-state*='invalid'] .filepond--file{color:#fff}#cl124cab08 [data-filepond-item-state='processing-complete'] .filepond--item-panel{background-color:#008000!important}#cl124cab08 [data-filepond-item-state='processing-complete'] .filepond--file{color:#fff}#cl124cab08 .filepond--image-preview-overlay-idle{color:rgba(34,34,34,0.8)}#cl124cab08 .filepond--image-preview{background-color:#555}#cl124cab08 .filepond--image-preview-overlay-success{color:#008000}#cl124cab08 .filepond--image-preview-overlay-failure{color:#f00}",
            "fileMimeTypes": [],
            "fileMimeTypesValidate": false,
            "fileSizeMaxPlan": 5000,
            "fileMultiple": true,
            "fileCountMin": 0,
            "fileCountMax": 10,
            "fileCounter": false,
            "fileFetch": false,
            "fileSubmitRemove": true,
            "fileSubmitClear": false,
            "fileGrid": false,
            "imagePreview": false,
            "imageSizeValidate": false,
            "imageThumbnail": false,
            "imageThumbnailWidth": 500,
            "imageThumbnailHeight": 500,
            "fieldPdf": "",
            "pdfConvert": false,
            "pdfOriginal": true,
            "serverTransform": false,
            "imageOriginal": false,
            "imageEditor": false,
            "imageEditorOpen": true,
            "imageEditorCropRestrict": false,
            "imageEditorCropRatios": [{
                "label": "Free",
                "value": ""
            }, {
                "label": "Portrait",
                "value": "3:2"
            }, {
                "label": "Square",
                "value": "1:1"
            }, {
                "label": "Landscape",
                "value": "4:3"
            }],
            "imageEditorUtils": ["crop"],
            "inputFields": [],
            "variantConfigs": [],
            "variantConfig": false
        }, {
            "uuid": "cl5733d2dc",
            "required": true,
            "hidden": false,
            "field": "image",
            "propertyTransform": true,
            "fieldProperty": "properties",
            "fieldId": "_cl-upload",
            "fieldThumbnail": "_thumbnail",
            "fieldThumbnailPreview": false,
            "className": "",
            "label": "Upload & Edit <u>Image</u>",
            "text": "",
            "selector": "",
            "conditionMode": 1,
            "conditions": [{
                "field": "product_tags",
                "operator": "equals",
                "value": "",
                "objects": null,
                "tags": ["image-editor"]
            }],
            "styles": {
                "file-grid": "0",
                "font-family": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\nHelvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',\n'Segoe UI Symbol'",
                "input-order": "top",
                "label-color": "#555",
                "file-counter": "0",
                "input-margin": "10.0px",
                "buttons-color": "#fff",
                "label-font-size": "16.0px",
                "label-color-drop": "#ffffff",
                "area-border-radius": "5.0px",
                "file-border-radius": "5.0px",
                "label-font-size-drop": "16.0px",
                "area-background-color": "#1E73BD",
                "file-background-color": "#e6ecff",
                "buttons-background-color": "#1E73BD",
                "upload-error-background-color": "#c44e47",
                "upload-success-background-color": "#36a8de"
            },
            "theme": "ocean",
            "css": "#cl5733d2dc .cl-hide{display:none!important}#cl5733d2dc .cl-upload--label{color:#555;font-size:16px;display:block}#cl5733d2dc .cl-upload--input-field{margin-bottom:10px}#cl5733d2dc .cl-upload--input{width:100%;box-sizing:border-box;padding:10px 18px;margin:0;border:1px solid #1e73bd;border-radius:5px}#cl5733d2dc input[type=checkbox].cl-upload--input,#cl5733d2dc input[type=radio].cl-upload--input{width:1.2em;cursor:pointer}#cl5733d2dc input[type=radio].cl-upload--input{vertical-align:middle;margin-right:10px}#cl5733d2dc input[type=color].cl-upload--input{width:40px;height:40px;cursor:pointer;padding:0;border:0}#cl5733d2dc input[type=radio]+.cl-upload-color-rect{margin-right:10px;margin-bottom:10px}#cl5733d2dc input[type=radio]:checked+.cl-upload-color-rect{border:2px solid #404040}#cl5733d2dc .cl-upload-color-rect{width:30px;height:30px;display:inline-block;vertical-align:middle;border-radius:3px}#cl5733d2dc .cl-upload--invalid{border-color:#b7423b}#cl5733d2dc .cl-upload--errors{overflow:hidden;transition:max-height 2s ease-out;max-height:0}#cl5733d2dc .cl-upload--errors.open{max-height:400px}#cl5733d2dc .cl-upload--error{text-align:center;font-size:14px;cursor:pointer;position:relative;opacity:1;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol';box-sizing:border-box;color:#fff;background-color:#c44e47;padding:.3rem .7rem;margin-bottom:.7rem;border:1px solid transparent;border-color:#b7423b;border-radius:5px}#cl5733d2dc .cl-upload--error:after{content:'x';position:absolute;right:1rem;top:.25rem}#cl5733d2dc .cl-upload--error.dismissed{opacity:0;transition:opacity .3s ease-out}#cl5733d2dc .filepond--root{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'}#cl5733d2dc .filepond--file-action-button{cursor:pointer;min-height:auto!important;height:1.625em}#cl5733d2dc .filepond--drop-label{color:#fff}#cl5733d2dc .filepond--drop-label label{cursor:pointer;width:auto!important;height:auto!important;position:relative!important;color:#fff!important;font-size:16px!important}#cl5733d2dc .filepond--drop-label u{cursor:pointer;text-decoration-color:#fff}#cl5733d2dc .filepond--label-action{text-decoration-color:#fff}#cl5733d2dc .filepond--panel-root{background-color:#1e73bd!important}#cl5733d2dc .filepond--panel-root{border-radius:5px}#cl5733d2dc .filepond--item-panel,#cl5733d2dc .filepond--file-poster-wrapper,#cl5733d2dc .filepond--image-preview-wrapper{border-radius:5px}#cl5733d2dc .filepond--item-panel{background-color:#e6ecff!important}#cl5733d2dc .filepond--drip-blob{background-color:#999}#cl5733d2dc .filepond--file-action-button{background-color:#1e73bd}#cl5733d2dc .filepond--file-action-button{color:#fff}#cl5733d2dc .filepond--file-action-button:hover,#cl5733d2dc .filepond--file-action-button:focus{box-shadow:0 0 0 .125em #fff}#cl5733d2dc .filepond--file{color:#000;font-size:16px}#cl5733d2dc [data-filepond-item-state*='error'] .filepond--item-panel,#cl5733d2dc [data-filepond-item-state*='invalid'] .filepond--item-panel{background-color:#c44e47!important}#cl5733d2dc [data-filepond-item-state*='invalid'] .filepond--file{color:#fff}#cl5733d2dc [data-filepond-item-state='processing-complete'] .filepond--item-panel{background-color:#36a8de!important}#cl5733d2dc [data-filepond-item-state='processing-complete'] .filepond--file{color:#fff}#cl5733d2dc .filepond--image-preview-overlay-idle{color:rgba(128,158,255,0.8)}#cl5733d2dc .filepond--image-preview{background-color:#e6ecff}#cl5733d2dc .filepond--image-preview-overlay-success{color:#36a8de}#cl5733d2dc .filepond--image-preview-overlay-failure{color:#c44e47}",
            "fileMimeTypes": ["image/png", "image/jpeg", "application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"],
            "fileMimeTypesValidate": true,
            "fileSizeMaxPlan": 5000,
            "fileMultiple": false,
            "fileCountMin": 0,
            "fileCountMax": 10,
            "fileCounter": false,
            "fileFetch": true,
            "fileSubmitRemove": true,
            "fileSubmitClear": false,
            "fileGrid": false,
            "imagePreview": false,
            "imageSizeValidate": false,
            "imageWidthMin": 1000,
            "imageHeightMin": 200,
            "imageThumbnail": true,
            "imageThumbnailWidth": 1000,
            "imageThumbnailHeight": 1000,
            "fieldPdf": "",
            "pdfConvert": false,
            "pdfOriginal": true,
            "serverTransform": false,
            "imageOriginal": true,
            "imageEditor": true,
            "imageEditorOpen": true,
            "imageEditorCropRestrict": true,
            "imageEditorCropRatios": [{
                "label": "Free",
                "value": null
            }, {
                "label": "Square",
                "value": "1:1"
            }],
            "imageEditorUtils": ["crop", "filter", "color", "markup"],
            "inputFields": [],
            "variantConfigs": [],
            "variantConfig": false
        }, {
            "uuid": "cl8b92e755",
            "required": true,
            "hidden": false,
            "field": "photo",
            "propertyTransform": true,
            "fieldProperty": "properties",
            "fieldId": "_cl-upload",
            "fieldThumbnail": "_thumbnail",
            "fieldThumbnailPreview": false,
            "className": "",
            "label": "Upload at least 3 images",
            "text": "",
            "selector": "",
            "conditionMode": 2,
            "conditions": [{
                "field": "product",
                "operator": "equals",
                "value": "",
                "objects": [{
                    "id": "4478705041453",
                    "title": "Photo collage multiple files",
                    "handle": null
                }],
                "tags": null
            }],
            "styles": {
                "file-grid": "0",
                "font-family": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\nHelvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',\n'Segoe UI Symbol'",
                "input-order": "top",
                "label-color": "#6b6b6b",
                "file-counter": "1",
                "input-margin": "10.0px",
                "buttons-color": "#fff",
                "label-font-size": "16.0px",
                "label-color-drop": "#6b6b6b",
                "area-border-radius": "0.0px",
                "file-border-radius": "0.0px",
                "label-font-size-drop": "16.0px",
                "area-background-color": "#eee",
                "file-background-color": "#ffffff",
                "buttons-background-color": "rgba(0,0,0,0.5)",
                "upload-error-background-color": "#c44e47",
                "upload-success-background-color": "#6b6b6b"
            },
            "theme": "basic",
            "css": "#cl8b92e755 .cl-hide{display:none!important}#cl8b92e755 .cl-upload--label{color:#6b6b6b;font-size:16px;display:block}#cl8b92e755 .cl-upload--input-field{margin-bottom:10px}#cl8b92e755 .cl-upload--input{width:100%;box-sizing:border-box;padding:10px 18px;margin:0;border:1px solid #eee;border-radius:0}#cl8b92e755 input[type=checkbox].cl-upload--input,#cl8b92e755 input[type=radio].cl-upload--input{width:1.2em;cursor:pointer}#cl8b92e755 input[type=radio].cl-upload--input{vertical-align:middle;margin-right:10px}#cl8b92e755 input[type=color].cl-upload--input{width:40px;height:40px;cursor:pointer;padding:0;border:0}#cl8b92e755 input[type=radio]+.cl-upload-color-rect{margin-right:10px;margin-bottom:10px}#cl8b92e755 input[type=radio]:checked+.cl-upload-color-rect{border:2px solid #404040}#cl8b92e755 .cl-upload-color-rect{width:30px;height:30px;display:inline-block;vertical-align:middle;border-radius:3px}#cl8b92e755 .cl-upload--invalid{border-color:#b7423b}#cl8b92e755 .cl-upload--errors{overflow:hidden;transition:max-height 2s ease-out;max-height:0}#cl8b92e755 .cl-upload--errors.open{max-height:400px}#cl8b92e755 .cl-upload--error{text-align:center;font-size:14px;cursor:pointer;position:relative;opacity:1;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol';box-sizing:border-box;color:#fff;background-color:#c44e47;padding:.3rem .7rem;margin-bottom:.7rem;border:1px solid transparent;border-color:#b7423b;border-radius:0}#cl8b92e755 .cl-upload--error:after{content:'x';position:absolute;right:1rem;top:.25rem}#cl8b92e755 .cl-upload--error.dismissed{opacity:0;transition:opacity .3s ease-out}#cl8b92e755 .filepond--root .filepond--drop-label{min-height:5.5em;padding-bottom:.5em}#cl8b92e755 .filepond--root .filepond--list-scroller{margin-bottom:2em}#cl8b92e755 .cl-upload--counter{position:absolute;left:0;right:0;bottom:.5rem;z-index:10;text-align:center;font-size:12px;color:#6b6b6b;font-weight:bold;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'}#cl8b92e755 .filepond--root{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'}#cl8b92e755 .filepond--file-action-button{cursor:pointer;min-height:auto!important;height:1.625em}#cl8b92e755 .filepond--drop-label{color:#6b6b6b}#cl8b92e755 .filepond--drop-label label{cursor:pointer;width:auto!important;height:auto!important;position:relative!important;color:#6b6b6b!important;font-size:16px!important}#cl8b92e755 .filepond--drop-label u{cursor:pointer;text-decoration-color:#6b6b6b}#cl8b92e755 .filepond--label-action{text-decoration-color:#6b6b6b}#cl8b92e755 .filepond--panel-root{background-color:#eee!important}#cl8b92e755 .filepond--panel-root{border-radius:0}#cl8b92e755 .filepond--item-panel,#cl8b92e755 .filepond--file-poster-wrapper,#cl8b92e755 .filepond--image-preview-wrapper{border-radius:0}#cl8b92e755 .filepond--item-panel{background-color:#fff!important}#cl8b92e755 .filepond--drip-blob{background-color:#999}#cl8b92e755 .filepond--file-action-button{background-color:rgba(0,0,0,0.5)}#cl8b92e755 .filepond--file-action-button{color:#fff}#cl8b92e755 .filepond--file-action-button:hover,#cl8b92e755 .filepond--file-action-button:focus{box-shadow:0 0 0 .125em #fff}#cl8b92e755 .filepond--file{color:#000;font-size:16px}#cl8b92e755 [data-filepond-item-state*='error'] .filepond--item-panel,#cl8b92e755 [data-filepond-item-state*='invalid'] .filepond--item-panel{background-color:#c44e47!important}#cl8b92e755 [data-filepond-item-state*='invalid'] .filepond--file{color:#fff}#cl8b92e755 [data-filepond-item-state='processing-complete'] .filepond--item-panel{background-color:#6b6b6b!important}#cl8b92e755 [data-filepond-item-state='processing-complete'] .filepond--file{color:#fff}#cl8b92e755 .filepond--image-preview-overlay-idle{color:rgba(204,204,204,0.8)}#cl8b92e755 .filepond--image-preview{background-color:#fff}#cl8b92e755 .filepond--image-preview-overlay-success{color:#6b6b6b}#cl8b92e755 .filepond--image-preview-overlay-failure{color:#c44e47}",
            "fileMimeTypes": ["image/*"],
            "fileMimeTypesValidate": true,
            "fileSizeMaxPlan": 5000,
            "fileMultiple": true,
            "fileCountMin": 3,
            "fileCountMax": 3,
            "fileCounter": true,
            "fileFetch": true,
            "fileSubmitRemove": true,
            "fileSubmitClear": false,
            "fileGrid": false,
            "imagePreview": true,
            "imageSizeValidate": false,
            "imageWidthMin": 1000,
            "imageHeightMin": 200,
            "imageThumbnail": true,
            "imageThumbnailWidth": 500,
            "imageThumbnailHeight": 500,
            "fieldPdf": "",
            "pdfConvert": false,
            "pdfOriginal": true,
            "serverTransform": false,
            "imageOriginal": false,
            "imageEditor": false,
            "imageEditorOpen": true,
            "imageEditorCropRestrict": true,
            "imageEditorCropRatios": [{
                "label": "Free",
                "value": null
            }, {
                "label": "Portrait",
                "value": "3:4"
            }],
            "imageEditorUtils": ["crop", "filter", "color", "markup"],
            "inputFields": [],
            "variantConfigs": [],
            "variantConfig": false
        }, {
            "uuid": "cl40a75f27",
            "required": true,
            "hidden": false,
            "field": "upload",
            "propertyTransform": true,
            "fieldProperty": "properties",
            "fieldId": "_upload_id",
            "fieldThumbnail": "_thumbnail",
            "fieldThumbnailPreview": false,
            "className": "",
            "label": "Upload files",
            "text": "",
            "selector": "",
            "conditionMode": 1,
            "conditions": [{
                "field": "product",
                "operator": "equals",
                "value": "",
                "objects": [{
                    "id": "4478705139757",
                    "title": "Upload Events",
                    "handle": null
                }],
                "tags": null
            }],
            "styles": {
                "file-grid": "0",
                "font-family": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\nHelvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',\n'Segoe UI Symbol'",
                "input-order": "top",
                "label-color": "#121212",
                "file-counter": "0",
                "input-margin": "10.0px",
                "buttons-color": "#fff",
                "label-font-size": "16.0px",
                "label-color-drop": "#ffffff",
                "area-border-radius": "5.0px",
                "file-border-radius": "5.0px",
                "label-font-size-drop": "16.0px",
                "area-background-color": "#121212",
                "file-background-color": "#4d4d4d",
                "buttons-background-color": "rgba(0,0,0,0.5)",
                "upload-error-background-color": "#990000",
                "upload-success-background-color": "#1E73BD"
            },
            "theme": "dark",
            "css": "#cl40a75f27 .cl-hide{display:none!important}#cl40a75f27 .cl-upload--label{color:#121212;font-size:16px;display:block}#cl40a75f27 .cl-upload--input-field{margin-bottom:10px}#cl40a75f27 .cl-upload--input{width:100%;box-sizing:border-box;padding:10px 18px;margin:0;border:1px solid #121212;border-radius:5px}#cl40a75f27 input[type=checkbox].cl-upload--input,#cl40a75f27 input[type=radio].cl-upload--input{width:1.2em;cursor:pointer}#cl40a75f27 input[type=radio].cl-upload--input{vertical-align:middle;margin-right:10px}#cl40a75f27 input[type=color].cl-upload--input{width:40px;height:40px;cursor:pointer;padding:0;border:0}#cl40a75f27 input[type=radio]+.cl-upload-color-rect{margin-right:10px;margin-bottom:10px}#cl40a75f27 input[type=radio]:checked+.cl-upload-color-rect{border:2px solid #404040}#cl40a75f27 .cl-upload-color-rect{width:30px;height:30px;display:inline-block;vertical-align:middle;border-radius:3px}#cl40a75f27 .cl-upload--invalid{border-color:#800000}#cl40a75f27 .cl-upload--errors{overflow:hidden;transition:max-height 2s ease-out;max-height:0}#cl40a75f27 .cl-upload--errors.open{max-height:400px}#cl40a75f27 .cl-upload--error{text-align:center;font-size:14px;cursor:pointer;position:relative;opacity:1;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol';box-sizing:border-box;color:#fff;background-color:#900;padding:.3rem .7rem;margin-bottom:.7rem;border:1px solid transparent;border-color:#800000;border-radius:5px}#cl40a75f27 .cl-upload--error:after{content:'x';position:absolute;right:1rem;top:.25rem}#cl40a75f27 .cl-upload--error.dismissed{opacity:0;transition:opacity .3s ease-out}#cl40a75f27 .filepond--root{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'}#cl40a75f27 .filepond--file-action-button{cursor:pointer;min-height:auto!important;height:1.625em}#cl40a75f27 .filepond--drop-label{color:#fff}#cl40a75f27 .filepond--drop-label label{cursor:pointer;width:auto!important;height:auto!important;position:relative!important;color:#fff!important;font-size:16px!important}#cl40a75f27 .filepond--drop-label u{cursor:pointer;text-decoration-color:#fff}#cl40a75f27 .filepond--label-action{text-decoration-color:#fff}#cl40a75f27 .filepond--panel-root{background-color:#121212!important}#cl40a75f27 .filepond--panel-root{border-radius:5px}#cl40a75f27 .filepond--item-panel,#cl40a75f27 .filepond--file-poster-wrapper,#cl40a75f27 .filepond--image-preview-wrapper{border-radius:5px}#cl40a75f27 .filepond--item-panel{background-color:#4d4d4d!important}#cl40a75f27 .filepond--drip-blob{background-color:#999}#cl40a75f27 .filepond--file-action-button{background-color:rgba(0,0,0,0.5)}#cl40a75f27 .filepond--file-action-button{color:#fff}#cl40a75f27 .filepond--file-action-button:hover,#cl40a75f27 .filepond--file-action-button:focus{box-shadow:0 0 0 .125em #fff}#cl40a75f27 .filepond--file{color:#fff;font-size:16px}#cl40a75f27 [data-filepond-item-state*='error'] .filepond--item-panel,#cl40a75f27 [data-filepond-item-state*='invalid'] .filepond--item-panel{background-color:#900!important}#cl40a75f27 [data-filepond-item-state*='invalid'] .filepond--file{color:#fff}#cl40a75f27 [data-filepond-item-state='processing-complete'] .filepond--item-panel{background-color:#1e73bd!important}#cl40a75f27 [data-filepond-item-state='processing-complete'] .filepond--file{color:#fff}#cl40a75f27 .filepond--image-preview-overlay-idle{color:rgba(26,26,26,0.8)}#cl40a75f27 .filepond--image-preview{background-color:#4d4d4d}#cl40a75f27 .filepond--image-preview-overlay-success{color:#1e73bd}#cl40a75f27 .filepond--image-preview-overlay-failure{color:#900}",
            "fileMimeTypes": [],
            "fileMimeTypesValidate": false,
            "fileSizeMaxPlan": 5000,
            "fileMultiple": true,
            "fileCountMin": 0,
            "fileCountMax": 10,
            "fileCounter": false,
            "fileFetch": true,
            "fileSubmitRemove": true,
            "fileSubmitClear": false,
            "fileGrid": false,
            "imagePreview": false,
            "imageSizeValidate": false,
            "imageThumbnail": true,
            "imageThumbnailWidth": 500,
            "imageThumbnailHeight": 500,
            "fieldPdf": "",
            "pdfConvert": false,
            "pdfOriginal": true,
            "serverTransform": false,
            "imageOriginal": false,
            "imageEditor": false,
            "imageEditorOpen": true,
            "imageEditorCropRestrict": true,
            "imageEditorCropRatios": [{
                "label": "Free",
                "value": ""
            }, {
                "label": "Portrait",
                "value": "3:2"
            }, {
                "label": "Square",
                "value": "1:1"
            }, {
                "label": "Landscape",
                "value": "4:3"
            }],
            "imageEditorUtils": ["crop"],
            "inputFields": [],
            "variantConfigs": [],
            "variantConfig": false
        }, {
            "uuid": "clb3ceca04",
            "required": false,
            "hidden": false,
            "field": "shipping",
            "propertyTransform": true,
            "fieldProperty": "attributes",
            "fieldId": "_upload_id",
            "fieldThumbnail": "_thumbnail",
            "fieldThumbnailPreview": false,
            "className": "",
            "label": "",
            "text": "<u>Upload shipping documents</u>",
            "selector": "",
            "conditionMode": 0,
            "conditions": [],
            "styles": {
                "file-grid": "0",
                "font-family": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\nHelvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',\n'Segoe UI Symbol'",
                "input-order": "top",
                "label-color": "#668aff",
                "file-counter": "0",
                "input-margin": "10.0px",
                "buttons-color": "#fff",
                "label-font-size": "24.0px",
                "label-color-drop": "#ffffff",
                "area-border-radius": "5.0px",
                "file-border-radius": "5.0px",
                "label-font-size-drop": "16.0px",
                "area-background-color": "#668aff",
                "file-background-color": "#e6ecff",
                "buttons-background-color": "#668aff",
                "upload-error-background-color": "#c44e47",
                "upload-success-background-color": "#435ba8"
            },
            "theme": "ocean",
            "css": "#clb3ceca04 .cl-hide{display:none!important}#clb3ceca04 .cl-upload--label{color:#668aff;font-size:24px;display:block}#clb3ceca04 .cl-upload--input-field{margin-bottom:10px}#clb3ceca04 .cl-upload--input{width:100%;box-sizing:border-box;padding:10px 18px;margin:0;border:1px solid #668aff;border-radius:5px}#clb3ceca04 input[type=checkbox].cl-upload--input,#clb3ceca04 input[type=radio].cl-upload--input{width:1.2em;cursor:pointer}#clb3ceca04 input[type=radio].cl-upload--input{vertical-align:middle;margin-right:10px}#clb3ceca04 input[type=color].cl-upload--input{width:40px;height:40px;cursor:pointer;padding:0;border:0}#clb3ceca04 input[type=radio]+.cl-upload-color-rect{margin-right:10px;margin-bottom:10px}#clb3ceca04 input[type=radio]:checked+.cl-upload-color-rect{border:2px solid #404040}#clb3ceca04 .cl-upload-color-rect{width:30px;height:30px;display:inline-block;vertical-align:middle;border-radius:3px}#clb3ceca04 .cl-upload--invalid{border-color:#b7423b}#clb3ceca04 .cl-upload--errors{overflow:hidden;transition:max-height 2s ease-out;max-height:0}#clb3ceca04 .cl-upload--errors.open{max-height:400px}#clb3ceca04 .cl-upload--error{text-align:center;font-size:16px;cursor:pointer;position:relative;opacity:1;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol';box-sizing:border-box;color:#fff;background-color:#c44e47;padding:.3rem .7rem;margin-bottom:.7rem;border:1px solid transparent;border-color:#b7423b;border-radius:5px}#clb3ceca04 .cl-upload--error:after{content:'x';position:absolute;right:1rem;top:.25rem}#clb3ceca04 .cl-upload--error.dismissed{opacity:0;transition:opacity .3s ease-out}#clb3ceca04 .filepond--root{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'}#clb3ceca04 .filepond--file-action-button{cursor:pointer;min-height:auto!important;height:1.625em}#clb3ceca04 .filepond--drop-label{color:#fff}#clb3ceca04 .filepond--drop-label label{cursor:pointer;width:auto!important;height:auto!important;position:relative!important;color:#fff!important;font-size:16px!important}#clb3ceca04 .filepond--drop-label u{cursor:pointer;text-decoration-color:#fff}#clb3ceca04 .filepond--label-action{text-decoration-color:#fff}#clb3ceca04 .filepond--panel-root{background-color:#668aff!important}#clb3ceca04 .filepond--panel-root{border-radius:5px}#clb3ceca04 .filepond--item-panel,#clb3ceca04 .filepond--file-poster-wrapper,#clb3ceca04 .filepond--image-preview-wrapper{border-radius:5px}#clb3ceca04 .filepond--item-panel{background-color:#e6ecff!important}#clb3ceca04 .filepond--drip-blob{background-color:#999}#clb3ceca04 .filepond--file-action-button{background-color:#668aff}#clb3ceca04 .filepond--file-action-button{color:#fff}#clb3ceca04 .filepond--file-action-button:hover,#clb3ceca04 .filepond--file-action-button:focus{box-shadow:0 0 0 .125em #fff}#clb3ceca04 .filepond--file{color:#000;font-size:16px}#clb3ceca04 [data-filepond-item-state*='error'] .filepond--item-panel,#clb3ceca04 [data-filepond-item-state*='invalid'] .filepond--item-panel{background-color:#c44e47!important}#clb3ceca04 [data-filepond-item-state*='invalid'] .filepond--file{color:#fff}#clb3ceca04 [data-filepond-item-state='processing-complete'] .filepond--item-panel{background-color:#435ba8!important}#clb3ceca04 [data-filepond-item-state='processing-complete'] .filepond--file{color:#fff}#clb3ceca04 .filepond--image-preview-overlay-idle{color:rgba(128,158,255,0.8)}#clb3ceca04 .filepond--image-preview{background-color:#e6ecff}#clb3ceca04 .filepond--image-preview-overlay-success{color:#435ba8}#clb3ceca04 .filepond--image-preview-overlay-failure{color:#c44e47}",
            "fileMimeTypes": [],
            "fileMimeTypesValidate": false,
            "fileSizeMaxPlan": 5000,
            "fileMultiple": false,
            "fileCountMin": 0,
            "fileCountMax": 10,
            "fileCounter": false,
            "fileFetch": true,
            "fileSubmitRemove": true,
            "fileSubmitClear": false,
            "fileGrid": false,
            "imagePreview": false,
            "imageSizeValidate": false,
            "imageThumbnail": false,
            "imageThumbnailWidth": 500,
            "imageThumbnailHeight": 500,
            "fieldPdf": "",
            "pdfConvert": false,
            "pdfOriginal": true,
            "serverTransform": false,
            "imageOriginal": false,
            "imageEditor": false,
            "imageEditorOpen": true,
            "imageEditorCropRestrict": false,
            "imageEditorCropRatios": [{
                "label": "Free",
                "value": ""
            }, {
                "label": "Portrait",
                "value": "3:2"
            }, {
                "label": "Square",
                "value": "1:1"
            }, {
                "label": "Landscape",
                "value": "4:3"
            }],
            "imageEditorUtils": ["crop"],
            "inputFields": [],
            "variantConfigs": [],
            "variantConfig": false
        }, {
            "uuid": "clf89c71a0",
            "required": true,
            "hidden": false,
            "field": "logo",
            "propertyTransform": true,
            "fieldProperty": "properties",
            "fieldId": "_upload_id",
            "fieldThumbnail": "_logo",
            "fieldThumbnailPreview": false,
            "className": "",
            "label": "Logo:",
            "text": "",
            "selector": "",
            "conditionMode": 1,
            "conditions": [{
                "field": "product",
                "operator": "equals",
                "value": "",
                "objects": [{
                    "id": "5148852912173",
                    "title": "Personalized Text & Logo",
                    "handle": null
                }],
                "tags": null
            }],
            "styles": {
                "file-grid": "0",
                "font-family": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\nHelvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',\n'Segoe UI Symbol'",
                "input-order": "top",
                "label-color": "#668aff",
                "file-counter": "0",
                "input-margin": "10.0px",
                "buttons-color": "#fff",
                "label-font-size": "24.0px",
                "label-color-drop": "#ffffff",
                "area-border-radius": "5.0px",
                "file-border-radius": "5.0px",
                "label-font-size-drop": "16.0px",
                "area-background-color": "#668aff",
                "file-background-color": "#e6ecff",
                "buttons-background-color": "#668aff",
                "upload-error-background-color": "#c44e47",
                "upload-success-background-color": "#435ba8"
            },
            "theme": "ocean",
            "css": "#clf89c71a0 .cl-hide{display:none!important}#clf89c71a0 .cl-upload--label{color:#668aff;font-size:24px;display:block}#clf89c71a0 .cl-upload--input-field{margin-bottom:10px}#clf89c71a0 .cl-upload--input{width:100%;box-sizing:border-box;padding:10px 18px;margin:0;border:1px solid #668aff;border-radius:5px}#clf89c71a0 input[type=checkbox].cl-upload--input,#clf89c71a0 input[type=radio].cl-upload--input{width:1.2em;cursor:pointer}#clf89c71a0 input[type=radio].cl-upload--input{vertical-align:middle;margin-right:10px}#clf89c71a0 input[type=color].cl-upload--input{width:40px;height:40px;cursor:pointer;padding:0;border:0}#clf89c71a0 input[type=radio]+.cl-upload-color-rect{margin-right:10px;margin-bottom:10px}#clf89c71a0 input[type=radio]:checked+.cl-upload-color-rect{border:2px solid #404040}#clf89c71a0 .cl-upload-color-rect{width:30px;height:30px;display:inline-block;vertical-align:middle;border-radius:3px}#clf89c71a0 .cl-upload--invalid{border-color:#b7423b}#clf89c71a0 .cl-upload--errors{overflow:hidden;transition:max-height 2s ease-out;max-height:0}#clf89c71a0 .cl-upload--errors.open{max-height:400px}#clf89c71a0 .cl-upload--error{text-align:center;font-size:16px;cursor:pointer;position:relative;opacity:1;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol';box-sizing:border-box;color:#fff;background-color:#c44e47;padding:.3rem .7rem;margin-bottom:.7rem;border:1px solid transparent;border-color:#b7423b;border-radius:5px}#clf89c71a0 .cl-upload--error:after{content:'x';position:absolute;right:1rem;top:.25rem}#clf89c71a0 .cl-upload--error.dismissed{opacity:0;transition:opacity .3s ease-out}#clf89c71a0 .filepond--root{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'}#clf89c71a0 .filepond--file-action-button{cursor:pointer;min-height:auto!important;height:1.625em}#clf89c71a0 .filepond--drop-label{color:#fff}#clf89c71a0 .filepond--drop-label label{cursor:pointer;width:auto!important;height:auto!important;position:relative!important;color:#fff!important;font-size:16px!important}#clf89c71a0 .filepond--drop-label u{cursor:pointer;text-decoration-color:#fff}#clf89c71a0 .filepond--label-action{text-decoration-color:#fff}#clf89c71a0 .filepond--panel-root{background-color:#668aff!important}#clf89c71a0 .filepond--panel-root{border-radius:5px}#clf89c71a0 .filepond--item-panel,#clf89c71a0 .filepond--file-poster-wrapper,#clf89c71a0 .filepond--image-preview-wrapper{border-radius:5px}#clf89c71a0 .filepond--item-panel{background-color:#e6ecff!important}#clf89c71a0 .filepond--drip-blob{background-color:#999}#clf89c71a0 .filepond--file-action-button{background-color:#668aff}#clf89c71a0 .filepond--file-action-button{color:#fff}#clf89c71a0 .filepond--file-action-button:hover,#clf89c71a0 .filepond--file-action-button:focus{box-shadow:0 0 0 .125em #fff}#clf89c71a0 .filepond--file{color:#000;font-size:16px}#clf89c71a0 [data-filepond-item-state*='error'] .filepond--item-panel,#clf89c71a0 [data-filepond-item-state*='invalid'] .filepond--item-panel{background-color:#c44e47!important}#clf89c71a0 [data-filepond-item-state*='invalid'] .filepond--file{color:#fff}#clf89c71a0 [data-filepond-item-state='processing-complete'] .filepond--item-panel{background-color:#435ba8!important}#clf89c71a0 [data-filepond-item-state='processing-complete'] .filepond--file{color:#fff}#clf89c71a0 .filepond--image-preview-overlay-idle{color:rgba(128,158,255,0.8)}#clf89c71a0 .filepond--image-preview{background-color:#e6ecff}#clf89c71a0 .filepond--image-preview-overlay-success{color:#435ba8}#clf89c71a0 .filepond--image-preview-overlay-failure{color:#c44e47}",
            "fileMimeTypes": ["image/*"],
            "fileMimeTypesValidate": true,
            "fileSizeMaxPlan": 5000,
            "fileMultiple": false,
            "fileCountMin": 0,
            "fileCountMax": 10,
            "fileCounter": false,
            "fileFetch": true,
            "fileSubmitRemove": true,
            "fileSubmitClear": false,
            "fileGrid": false,
            "imagePreview": false,
            "imageSizeValidate": false,
            "imageThumbnail": true,
            "imageThumbnailWidth": 500,
            "imageThumbnailHeight": 500,
            "fieldPdf": "",
            "pdfConvert": false,
            "pdfOriginal": true,
            "serverTransform": false,
            "imageOriginal": false,
            "imageEditor": false,
            "imageEditorOpen": true,
            "imageEditorCropRestrict": false,
            "imageEditorCropRatios": [{
                "label": "Free",
                "value": ""
            }, {
                "label": "Portrait",
                "value": "3:2"
            }, {
                "label": "Square",
                "value": "1:1"
            }, {
                "label": "Landscape",
                "value": "4:3"
            }],
            "imageEditorUtils": [],
            "inputFields": [{
                "field": "text",
                "type": "textarea",
                "value": "Custom text",
                "label": "Text:",
                "required": false,
                "max": 100
            }, {
                "field": "color",
                "type": "color",
                "value": "#F44336,#9C27B0,#673AB7,#3F51B5,#2196F3,#03A9F4,#00BCD4,#009688,#4CAF50,#8BC34A,#CDDC39,#FFEB3B,#FFC107",
                "label": "Color:",
                "required": false
            }],
            "variantConfigs": [],
            "variantConfig": false
        }, {
            "uuid": "cl43e4f067",
            "required": true,
            "hidden": false,
            "field": "upload",
            "propertyTransform": true,
            "fieldProperty": "properties",
            "fieldId": "_cl-upload",
            "fieldThumbnail": "_thumbnail",
            "fieldThumbnailPreview": false,
            "className": "",
            "label": "Upload",
            "text": "",
            "selector": "",
            "conditionMode": 1,
            "conditions": [{
                "field": "product",
                "operator": "equals",
                "value": "",
                "objects": [{
                    "id": "5211161755693",
                    "title": "Personalized Variants",
                    "handle": null
                }],
                "tags": null
            }],
            "styles": {
                "file-grid": "0",
                "font-family": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\nHelvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',\n'Segoe UI Symbol'",
                "input-order": "top",
                "label-color": "#555",
                "file-counter": "1",
                "input-margin": "10.0px",
                "buttons-color": "#fff",
                "label-font-size": "16.0px",
                "label-color-drop": "#555",
                "area-border-radius": "5.0px",
                "file-border-radius": "5.0px",
                "label-font-size-drop": "16.0px",
                "area-background-color": "#eee",
                "file-background-color": "#555",
                "buttons-background-color": "rgba(0,0,0,0.5)",
                "upload-error-background-color": "#FF0000",
                "upload-success-background-color": "#008000"
            },
            "theme": "default",
            "css": "#cl43e4f067 .cl-hide{display:none!important}#cl43e4f067 .cl-upload--label{color:#555;font-size:16px;display:block}#cl43e4f067 .cl-upload--input-field{margin-bottom:10px}#cl43e4f067 .cl-upload--input{width:100%;box-sizing:border-box;padding:10px 18px;margin:0;border:1px solid #eee;border-radius:5px}#cl43e4f067 input[type=checkbox].cl-upload--input,#cl43e4f067 input[type=radio].cl-upload--input{width:1.2em;cursor:pointer}#cl43e4f067 input[type=radio].cl-upload--input{vertical-align:middle;margin-right:10px}#cl43e4f067 input[type=color].cl-upload--input{width:40px;height:40px;cursor:pointer;padding:0;border:0}#cl43e4f067 input[type=radio]+.cl-upload-color-rect{margin-right:10px;margin-bottom:10px}#cl43e4f067 input[type=radio]:checked+.cl-upload-color-rect{border:2px solid #404040}#cl43e4f067 .cl-upload-color-rect{width:30px;height:30px;display:inline-block;vertical-align:middle;border-radius:3px}#cl43e4f067 .cl-upload--invalid{border-color:#e60000}#cl43e4f067 .cl-upload--errors{overflow:hidden;transition:max-height 2s ease-out;max-height:0}#cl43e4f067 .cl-upload--errors.open{max-height:400px}#cl43e4f067 .cl-upload--error{text-align:center;font-size:14px;cursor:pointer;position:relative;opacity:1;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol';box-sizing:border-box;color:#fff;background-color:#f00;padding:.3rem .7rem;margin-bottom:.7rem;border:1px solid transparent;border-color:#e60000;border-radius:5px}#cl43e4f067 .cl-upload--error:after{content:'x';position:absolute;right:1rem;top:.25rem}#cl43e4f067 .cl-upload--error.dismissed{opacity:0;transition:opacity .3s ease-out}#cl43e4f067 .filepond--root .filepond--drop-label{min-height:5.5em;padding-bottom:.5em}#cl43e4f067 .filepond--root .filepond--list-scroller{margin-bottom:2em}#cl43e4f067 .cl-upload--counter{position:absolute;left:0;right:0;bottom:.5rem;z-index:10;text-align:center;font-size:12px;color:#555;font-weight:bold;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'}#cl43e4f067 .filepond--root{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'}#cl43e4f067 .filepond--file-action-button{cursor:pointer;min-height:auto!important;height:1.625em}#cl43e4f067 .filepond--drop-label{color:#555}#cl43e4f067 .filepond--drop-label label{cursor:pointer;width:auto!important;height:auto!important;position:relative!important;color:#555!important;font-size:16px!important}#cl43e4f067 .filepond--drop-label u{cursor:pointer;text-decoration-color:#555}#cl43e4f067 .filepond--label-action{text-decoration-color:#555}#cl43e4f067 .filepond--panel-root{background-color:#eee!important}#cl43e4f067 .filepond--panel-root{border-radius:5px}#cl43e4f067 .filepond--item-panel,#cl43e4f067 .filepond--file-poster-wrapper,#cl43e4f067 .filepond--image-preview-wrapper{border-radius:5px}#cl43e4f067 .filepond--item-panel{background-color:#555!important}#cl43e4f067 .filepond--drip-blob{background-color:#999}#cl43e4f067 .filepond--file-action-button{background-color:rgba(0,0,0,0.5)}#cl43e4f067 .filepond--file-action-button{color:#fff}#cl43e4f067 .filepond--file-action-button:hover,#cl43e4f067 .filepond--file-action-button:focus{box-shadow:0 0 0 .125em #fff}#cl43e4f067 .filepond--file{color:#fff;font-size:16px}#cl43e4f067 [data-filepond-item-state*='error'] .filepond--item-panel,#cl43e4f067 [data-filepond-item-state*='invalid'] .filepond--item-panel{background-color:#f00!important}#cl43e4f067 [data-filepond-item-state*='invalid'] .filepond--file{color:#fff}#cl43e4f067 [data-filepond-item-state='processing-complete'] .filepond--item-panel{background-color:#008000!important}#cl43e4f067 [data-filepond-item-state='processing-complete'] .filepond--file{color:#fff}#cl43e4f067 .filepond--image-preview-overlay-idle{color:rgba(34,34,34,0.8)}#cl43e4f067 .filepond--image-preview{background-color:#555}#cl43e4f067 .filepond--image-preview-overlay-success{color:#008000}#cl43e4f067 .filepond--image-preview-overlay-failure{color:#f00}",
            "fileMimeTypes": [],
            "fileMimeTypesValidate": false,
            "fileSizeMaxPlan": 5000,
            "fileMultiple": true,
            "fileCountMin": 2,
            "fileCountMax": 2,
            "fileCounter": true,
            "fileFetch": true,
            "fileSubmitRemove": true,
            "fileSubmitClear": false,
            "fileGrid": false,
            "imagePreview": false,
            "imageSizeValidate": false,
            "imageThumbnail": false,
            "imageThumbnailWidth": 500,
            "imageThumbnailHeight": 500,
            "fieldPdf": "",
            "pdfConvert": false,
            "pdfOriginal": true,
            "serverTransform": false,
            "imageOriginal": false,
            "imageEditor": false,
            "imageEditorOpen": true,
            "imageEditorCropRestrict": false,
            "imageEditorCropRatios": [{
                "label": "Free",
                "value": ""
            }, {
                "label": "Portrait",
                "value": "3:2"
            }, {
                "label": "Square",
                "value": "1:1"
            }, {
                "label": "Landscape",
                "value": "4:3"
            }],
            "imageEditorUtils": [],
            "inputFields": [],
            "variantConfigs": [{
                "product": {
                    "id": "5211161755693",
                    "title": "Personalized Variants",
                    "handle": null
                },
                "variants": [{
                    "id": "34892450365485",
                    "title": "single",
                    "handle": null
                }],
                "required": true,
                "hidden": false,
                "fileMultiple": false,
                "fileCountMin": 2,
                "fileCountMax": 2,
                "imageSettings": false,
                "imageSizeValidate": false,
                "imageWidthMin": null,
                "imageHeightMin": null,
                "imageResolutionMin": null,
                "imageEditorCropRestrict": false,
                "imageEditorCropRatios": []
            }, {
                "product": {
                    "id": "5211161755693",
                    "title": "Personalized Variants",
                    "handle": null
                },
                "variants": [{
                    "id": "34892450398253",
                    "title": "double",
                    "handle": null
                }],
                "required": true,
                "hidden": false,
                "fileMultiple": true,
                "fileCountMin": 2,
                "fileCountMax": 2,
                "imageSettings": false,
                "imageSizeValidate": false,
                "imageWidthMin": null,
                "imageHeightMin": null,
                "imageResolutionMin": null,
                "imageEditorCropRestrict": false,
                "imageEditorCropRatios": []
            }, {
                "product": {
                    "id": "5211161755693",
                    "title": "Personalized Variants",
                    "handle": null
                },
                "variants": [{
                    "id": "34892450431021",
                    "title": "hidden",
                    "handle": null
                }],
                "required": false,
                "hidden": true,
                "fileMultiple": false,
                "fileCountMin": 2,
                "fileCountMax": 2,
                "imageSettings": false,
                "imageSizeValidate": false,
                "imageWidthMin": null,
                "imageHeightMin": null,
                "imageResolutionMin": null,
                "imageEditorCropRestrict": false,
                "imageEditorCropRatios": []
            }],
            "variantConfig": true
        }, {
            "uuid": "clf4898776",
            "required": true,
            "hidden": false,
            "field": "image",
            "propertyTransform": true,
            "fieldProperty": "properties",
            "fieldId": "_cl-upload",
            "fieldThumbnail": "thumbnail",
            "fieldThumbnailPreview": true,
            "className": "",
            "label": "Upload image",
            "text": "",
            "selector": "",
            "conditionMode": 1,
            "conditions": [{
                "field": "product",
                "operator": "equals",
                "value": "",
                "objects": [{
                    "id": "5257358639149",
                    "title": "Personalized Variant Image Ratio",
                    "handle": null
                }],
                "tags": null
            }],
            "styles": {
                "file-grid": "0",
                "font-family": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\nHelvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',\n'Segoe UI Symbol'",
                "input-order": "top",
                "label-color": "#668aff",
                "file-counter": "1",
                "input-margin": "10.0px",
                "buttons-color": "#fff",
                "label-font-size": "24.0px",
                "label-color-drop": "#ffffff",
                "area-border-radius": "5.0px",
                "file-border-radius": "5.0px",
                "label-font-size-drop": "16.0px",
                "area-background-color": "#668aff",
                "file-background-color": "#e6ecff",
                "buttons-background-color": "#668aff",
                "upload-error-background-color": "#c44e47",
                "upload-success-background-color": "#435ba8"
            },
            "theme": "ocean",
            "css": "#clf4898776 .cl-hide{display:none!important}#clf4898776 .cl-upload--label{color:#668aff;font-size:24px;display:block}#clf4898776 .cl-upload--input-field{margin-bottom:10px}#clf4898776 .cl-upload--input{width:100%;box-sizing:border-box;padding:10px 18px;margin:0;border:1px solid #668aff;border-radius:5px}#clf4898776 input[type=checkbox].cl-upload--input,#clf4898776 input[type=radio].cl-upload--input{width:1.2em;cursor:pointer}#clf4898776 input[type=radio].cl-upload--input{vertical-align:middle;margin-right:10px}#clf4898776 input[type=color].cl-upload--input{width:40px;height:40px;cursor:pointer;padding:0;border:0}#clf4898776 input[type=radio]+.cl-upload-color-rect{margin-right:10px;margin-bottom:10px}#clf4898776 input[type=radio]:checked+.cl-upload-color-rect{border:2px solid #404040}#clf4898776 .cl-upload-color-rect{width:30px;height:30px;display:inline-block;vertical-align:middle;border-radius:3px}#clf4898776 .cl-upload--invalid{border-color:#b7423b}#clf4898776 .cl-upload--errors{overflow:hidden;transition:max-height 2s ease-out;max-height:0}#clf4898776 .cl-upload--errors.open{max-height:400px}#clf4898776 .cl-upload--error{text-align:center;font-size:16px;cursor:pointer;position:relative;opacity:1;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol';box-sizing:border-box;color:#fff;background-color:#c44e47;padding:.3rem .7rem;margin-bottom:.7rem;border:1px solid transparent;border-color:#b7423b;border-radius:5px}#clf4898776 .cl-upload--error:after{content:'x';position:absolute;right:1rem;top:.25rem}#clf4898776 .cl-upload--error.dismissed{opacity:0;transition:opacity .3s ease-out}#clf4898776 .filepond--root .filepond--drop-label{min-height:5.5em;padding-bottom:.5em}#clf4898776 .filepond--root .filepond--list-scroller{margin-bottom:2em}#clf4898776 .cl-upload--counter{position:absolute;left:0;right:0;bottom:.5rem;z-index:10;text-align:center;font-size:12px;color:#fff;font-weight:bold;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'}#clf4898776 .filepond--root{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'}#clf4898776 .filepond--file-action-button{cursor:pointer;min-height:auto!important;height:1.625em}#clf4898776 .filepond--drop-label{color:#fff}#clf4898776 .filepond--drop-label label{cursor:pointer;width:auto!important;height:auto!important;position:relative!important;color:#fff!important;font-size:16px!important}#clf4898776 .filepond--drop-label u{cursor:pointer;text-decoration-color:#fff}#clf4898776 .filepond--label-action{text-decoration-color:#fff}#clf4898776 .filepond--panel-root{background-color:#668aff!important}#clf4898776 .filepond--panel-root{border-radius:5px}#clf4898776 .filepond--item-panel,#clf4898776 .filepond--file-poster-wrapper,#clf4898776 .filepond--image-preview-wrapper{border-radius:5px}#clf4898776 .filepond--item-panel{background-color:#e6ecff!important}#clf4898776 .filepond--drip-blob{background-color:#999}#clf4898776 .filepond--file-action-button{background-color:#668aff}#clf4898776 .filepond--file-action-button{color:#fff}#clf4898776 .filepond--file-action-button:hover,#clf4898776 .filepond--file-action-button:focus{box-shadow:0 0 0 .125em #fff}#clf4898776 .filepond--file{color:#000;font-size:16px}#clf4898776 [data-filepond-item-state*='error'] .filepond--item-panel,#clf4898776 [data-filepond-item-state*='invalid'] .filepond--item-panel{background-color:#c44e47!important}#clf4898776 [data-filepond-item-state*='invalid'] .filepond--file{color:#fff}#clf4898776 [data-filepond-item-state='processing-complete'] .filepond--item-panel{background-color:#435ba8!important}#clf4898776 [data-filepond-item-state='processing-complete'] .filepond--file{color:#fff}#clf4898776 .filepond--image-preview-overlay-idle{color:rgba(128,158,255,0.8)}#clf4898776 .filepond--image-preview{background-color:#e6ecff}#clf4898776 .filepond--image-preview-overlay-success{color:#435ba8}#clf4898776 .filepond--image-preview-overlay-failure{color:#c44e47}",
            "fileMimeTypes": [],
            "fileMimeTypesValidate": false,
            "fileSizeMaxPlan": 5000,
            "fileMultiple": true,
            "fileCountMin": 0,
            "fileCountMax": 10,
            "fileCounter": true,
            "fileFetch": true,
            "fileSubmitRemove": true,
            "fileSubmitClear": false,
            "fileGrid": false,
            "imagePreview": false,
            "imageSizeValidate": false,
            "imageThumbnail": false,
            "imageThumbnailWidth": 500,
            "imageThumbnailHeight": 500,
            "fieldPdf": "",
            "pdfConvert": false,
            "pdfOriginal": true,
            "serverTransform": false,
            "imageOriginal": false,
            "imageEditor": true,
            "imageEditorOpen": true,
            "imageEditorCropRestrict": false,
            "imageEditorCropRatios": [{
                "label": "Free",
                "value": ""
            }, {
                "label": "Portrait",
                "value": "3:2"
            }, {
                "label": "Square",
                "value": "1:1"
            }, {
                "label": "Landscape",
                "value": "4:3"
            }],
            "imageEditorUtils": [],
            "inputFields": [],
            "variantConfigs": [{
                "product": {
                    "id": "5257358639149",
                    "title": "Personalized Variant Image Ratio",
                    "handle": null
                },
                "variants": [{
                    "id": "34996152860717",
                    "title": "1:1",
                    "handle": null
                }],
                "required": true,
                "hidden": false,
                "fileMultiple": true,
                "fileCountMin": 0,
                "fileCountMax": 10,
                "imageSettings": true,
                "imageSizeValidate": false,
                "imageWidthMin": null,
                "imageHeightMin": null,
                "imageResolutionMin": null,
                "imageEditorCropRestrict": true,
                "imageEditorCropRatios": [{
                    "label": "1:1",
                    "value": "1:1"
                }]
            }, {
                "product": {
                    "id": "5257358639149",
                    "title": "Personalized Variant Image Ratio",
                    "handle": null
                },
                "variants": [{
                    "id": "34996152893485",
                    "title": "2:1",
                    "handle": null
                }],
                "required": true,
                "hidden": false,
                "fileMultiple": true,
                "fileCountMin": 0,
                "fileCountMax": 10,
                "imageSettings": true,
                "imageSizeValidate": false,
                "imageWidthMin": null,
                "imageHeightMin": null,
                "imageResolutionMin": null,
                "imageEditorCropRestrict": true,
                "imageEditorCropRatios": [{
                    "label": "2:1",
                    "value": "2:1"
                }, {
                    "label": "1:2",
                    "value": "1:2"
                }]
            }, {
                "product": {
                    "id": "5257358639149",
                    "title": "Personalized Variant Image Ratio",
                    "handle": null
                },
                "variants": [{
                    "id": "34996152926253",
                    "title": "2:3",
                    "handle": null
                }],
                "required": true,
                "hidden": false,
                "fileMultiple": true,
                "fileCountMin": 0,
                "fileCountMax": 10,
                "imageSettings": true,
                "imageSizeValidate": false,
                "imageWidthMin": null,
                "imageHeightMin": null,
                "imageResolutionMin": null,
                "imageEditorCropRestrict": true,
                "imageEditorCropRatios": [{
                    "label": "2:3",
                    "value": "2:3"
                }, {
                    "label": "3:2",
                    "value": "3:2"
                }]
            }],
            "variantConfig": true
        }, {
            "uuid": "cl0adbg9iwyw",
            "required": false,
            "hidden": false,
            "field": "upload",
            "propertyTransform": true,
            "fieldProperty": "properties",
            "fieldId": "_cl-upload",
            "fieldThumbnail": "thumbnail",
            "fieldThumbnailPreview": true,
            "className": "",
            "label": "",
            "text": "",
            "selector": "",
            "conditionMode": 1,
            "conditions": [],
            "styles": {
                "file-grid": "0",
                "font-family": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\nHelvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',\n'Segoe UI Symbol'",
                "input-order": "top",
                "label-color": "#555",
                "file-counter": "0",
                "input-margin": "10.0px",
                "buttons-color": "#fff",
                "label-font-size": "16.0px",
                "label-color-drop": "#555",
                "area-border-radius": "5.0px",
                "file-border-radius": "5.0px",
                "label-font-size-drop": "16.0px",
                "area-background-color": "#eee",
                "file-background-color": "#e6ecff",
                "buttons-background-color": "rgba(0,0,0,0.5)",
                "upload-error-background-color": "#c44e47",
                "upload-success-background-color": "#369763"
            },
            "theme": "default",
            "css": "#cl0adbg9iwyw .cl-hide{display:none!important}#cl0adbg9iwyw .cl-upload--label{color:#555;font-size:16px;display:block}#cl0adbg9iwyw .cl-upload--input-field{margin-bottom:10px}#cl0adbg9iwyw .cl-upload--input{width:100%;box-sizing:border-box;padding:10px 18px;margin:0;border:1px solid #eee;border-radius:5px}#cl0adbg9iwyw input[type=checkbox].cl-upload--input,#cl0adbg9iwyw input[type=radio].cl-upload--input{width:1.2em;cursor:pointer}#cl0adbg9iwyw input[type=radio].cl-upload--input{vertical-align:middle;margin-right:10px}#cl0adbg9iwyw input[type=color].cl-upload--input{width:40px;height:40px;cursor:pointer;padding:0;border:0}#cl0adbg9iwyw input[type=radio]+.cl-upload-color-rect{margin-right:10px;margin-bottom:10px}#cl0adbg9iwyw input[type=radio]:checked+.cl-upload-color-rect{border:2px solid #404040}#cl0adbg9iwyw .cl-upload-color-rect{width:30px;height:30px;display:inline-block;vertical-align:middle;border-radius:3px}#cl0adbg9iwyw .cl-upload--invalid{border-color:#b7423b}#cl0adbg9iwyw .cl-upload--errors{overflow:hidden;transition:max-height 2s ease-out;max-height:0}#cl0adbg9iwyw .cl-upload--errors.open{max-height:400px}#cl0adbg9iwyw .cl-upload--error{text-align:center;font-size:14px;cursor:pointer;position:relative;opacity:1;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol';box-sizing:border-box;color:#fff;background-color:#c44e47;padding:.3rem .7rem;margin-bottom:.7rem;border:1px solid transparent;border-color:#b7423b;border-radius:5px}#cl0adbg9iwyw .cl-upload--error:after{content:'x';position:absolute;right:1rem;top:.25rem}#cl0adbg9iwyw .cl-upload--error.dismissed{opacity:0;transition:opacity .3s ease-out}#cl0adbg9iwyw .filepond--root{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'}#cl0adbg9iwyw .filepond--file-action-button{cursor:pointer;min-height:auto!important;height:1.625em}#cl0adbg9iwyw .filepond--drop-label{color:#555}#cl0adbg9iwyw .filepond--drop-label label{cursor:pointer;width:auto!important;height:auto!important;position:relative!important;color:#555!important;font-size:16px!important}#cl0adbg9iwyw .filepond--drop-label u{cursor:pointer;text-decoration-color:#555}#cl0adbg9iwyw .filepond--label-action{text-decoration-color:#555}#cl0adbg9iwyw .filepond--panel-root{background-color:#eee!important}#cl0adbg9iwyw .filepond--panel-root{border-radius:5px}#cl0adbg9iwyw .filepond--item-panel,#cl0adbg9iwyw .filepond--file-poster-wrapper,#cl0adbg9iwyw .filepond--image-preview-wrapper{border-radius:5px}#cl0adbg9iwyw .filepond--item-panel{background-color:#e6ecff!important}#cl0adbg9iwyw .filepond--drip-blob{background-color:#999}#cl0adbg9iwyw .filepond--file-action-button{background-color:rgba(0,0,0,0.5)}#cl0adbg9iwyw .filepond--file-action-button{color:#fff}#cl0adbg9iwyw .filepond--file-action-button:hover,#cl0adbg9iwyw .filepond--file-action-button:focus{box-shadow:0 0 0 .125em #fff}#cl0adbg9iwyw .filepond--file{color:#000;font-size:16px}#cl0adbg9iwyw [data-filepond-item-state*='error'] .filepond--item-panel,#cl0adbg9iwyw [data-filepond-item-state*='invalid'] .filepond--item-panel{background-color:#c44e47!important}#cl0adbg9iwyw [data-filepond-item-state*='invalid'] .filepond--file{color:#fff}#cl0adbg9iwyw [data-filepond-item-state='processing-complete'] .filepond--item-panel{background-color:#369763!important}#cl0adbg9iwyw [data-filepond-item-state='processing-complete'] .filepond--file{color:#fff}#cl0adbg9iwyw .filepond--image-preview-overlay-idle{color:rgba(128,158,255,0.8)}#cl0adbg9iwyw .filepond--image-preview{background-color:#e6ecff}#cl0adbg9iwyw .filepond--image-preview-overlay-success{color:#369763}#cl0adbg9iwyw .filepond--image-preview-overlay-failure{color:#c44e47}",
            "fileMimeTypes": ["image/*"],
            "fileMimeTypesValidate": true,
            "fileSizeMaxPlan": 5000,
            "fileMultiple": false,
            "fileCountMin": 0,
            "fileCountMax": 10,
            "fileCounter": false,
            "fileFetch": false,
            "fileSubmitRemove": true,
            "fileSubmitClear": false,
            "fileGrid": false,
            "imagePreview": false,
            "imageSizeValidate": false,
            "imageThumbnail": false,
            "imageThumbnailWidth": 500,
            "imageThumbnailHeight": 500,
            "fieldPdf": "",
            "pdfConvert": false,
            "pdfOriginal": true,
            "serverTransform": false,
            "imageOriginal": false,
            "imageEditor": false,
            "imageEditorOpen": true,
            "imageEditorCropRestrict": false,
            "imageEditorCropRatios": [{
                "label": "Free",
                "value": ""
            }, {
                "label": "Portrait",
                "value": "3:2"
            }, {
                "label": "Square",
                "value": "1:1"
            }, {
                "label": "Landscape",
                "value": "4:3"
            }],
            "imageEditorUtils": [],
            "inputFields": [],
            "variantConfigs": [],
            "variantConfig": false
        }, {
            "uuid": "cllskecowyin",
            "required": false,
            "hidden": false,
            "field": "image",
            "propertyTransform": true,
            "fieldProperty": "properties",
            "fieldId": "_cl-upload",
            "fieldThumbnail": "thumbnail",
            "fieldThumbnailPreview": true,
            "className": "",
            "label": "",
            "text": "",
            "selector": "",
            "conditionMode": 1,
            "conditions": [],
            "styles": {
                "file-grid": "0",
                "font-family": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\nHelvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',\n'Segoe UI Symbol'",
                "input-order": "top",
                "label-color": "#555",
                "file-counter": "0",
                "input-margin": "10.0px",
                "buttons-color": "#fff",
                "label-font-size": "16.0px",
                "label-color-drop": "#555",
                "area-border-radius": "5.0px",
                "file-border-radius": "5.0px",
                "label-font-size-drop": "16.0px",
                "area-background-color": "#eee",
                "file-background-color": "#555",
                "buttons-background-color": "rgba(0,0,0,0.5)",
                "upload-error-background-color": "#FF0000",
                "upload-success-background-color": "#008000"
            },
            "theme": "default",
            "css": "#cllskecowyin .cl-hide{display:none!important}#cllskecowyin .cl-upload--label{color:#555;font-size:16px;display:block}#cllskecowyin .cl-upload--input-field{margin-bottom:10px}#cllskecowyin .cl-upload--input{width:100%;box-sizing:border-box;padding:10px 18px;margin:0;border:1px solid #eee;border-radius:5px}#cllskecowyin input[type=checkbox].cl-upload--input,#cllskecowyin input[type=radio].cl-upload--input{width:1.2em;cursor:pointer}#cllskecowyin input[type=radio].cl-upload--input{vertical-align:middle;margin-right:10px}#cllskecowyin input[type=color].cl-upload--input{width:40px;height:40px;cursor:pointer;padding:0;border:0}#cllskecowyin input[type=radio]+.cl-upload-color-rect{margin-right:10px;margin-bottom:10px}#cllskecowyin input[type=radio]:checked+.cl-upload-color-rect{border:2px solid #404040}#cllskecowyin .cl-upload-color-rect{width:30px;height:30px;display:inline-block;vertical-align:middle;border-radius:3px}#cllskecowyin .cl-upload--invalid{border-color:#e60000}#cllskecowyin .cl-upload--errors{overflow:hidden;transition:max-height 2s ease-out;max-height:0}#cllskecowyin .cl-upload--errors.open{max-height:400px}#cllskecowyin .cl-upload--error{text-align:center;font-size:14px;cursor:pointer;position:relative;opacity:1;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol';box-sizing:border-box;color:#fff;background-color:#f00;padding:.3rem .7rem;margin-bottom:.7rem;border:1px solid transparent;border-color:#e60000;border-radius:5px}#cllskecowyin .cl-upload--error:after{content:'x';position:absolute;right:1rem;top:.25rem}#cllskecowyin .cl-upload--error.dismissed{opacity:0;transition:opacity .3s ease-out}#cllskecowyin .filepond--root{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'}#cllskecowyin .filepond--file-action-button{cursor:pointer;min-height:auto!important;height:1.625em}#cllskecowyin .filepond--drop-label{color:#555}#cllskecowyin .filepond--drop-label label{cursor:pointer;width:auto!important;height:auto!important;position:relative!important;color:#555!important;font-size:16px!important}#cllskecowyin .filepond--drop-label u{cursor:pointer;text-decoration-color:#555}#cllskecowyin .filepond--label-action{text-decoration-color:#555}#cllskecowyin .filepond--panel-root{background-color:#eee!important}#cllskecowyin .filepond--panel-root{border-radius:5px}#cllskecowyin .filepond--item-panel,#cllskecowyin .filepond--file-poster-wrapper,#cllskecowyin .filepond--image-preview-wrapper{border-radius:5px}#cllskecowyin .filepond--item-panel{background-color:#555!important}#cllskecowyin .filepond--drip-blob{background-color:#999}#cllskecowyin .filepond--file-action-button{background-color:rgba(0,0,0,0.5)}#cllskecowyin .filepond--file-action-button{color:#fff}#cllskecowyin .filepond--file-action-button:hover,#cllskecowyin .filepond--file-action-button:focus{box-shadow:0 0 0 .125em #fff}#cllskecowyin .filepond--file{color:#fff;font-size:16px}#cllskecowyin [data-filepond-item-state*='error'] .filepond--item-panel,#cllskecowyin [data-filepond-item-state*='invalid'] .filepond--item-panel{background-color:#f00!important}#cllskecowyin [data-filepond-item-state*='invalid'] .filepond--file{color:#fff}#cllskecowyin [data-filepond-item-state='processing-complete'] .filepond--item-panel{background-color:#008000!important}#cllskecowyin [data-filepond-item-state='processing-complete'] .filepond--file{color:#fff}#cllskecowyin .filepond--image-preview-overlay-idle{color:rgba(34,34,34,0.8)}#cllskecowyin .filepond--image-preview{background-color:#555}#cllskecowyin .filepond--image-preview-overlay-success{color:#008000}#cllskecowyin .filepond--image-preview-overlay-failure{color:#f00}",
            "fileMimeTypes": ["image/*"],
            "fileMimeTypesValidate": true,
            "fileSizeMaxPlan": 5000,
            "fileMultiple": false,
            "fileCountMin": 0,
            "fileCountMax": 10,
            "fileCounter": false,
            "fileFetch": false,
            "fileSubmitRemove": true,
            "fileSubmitClear": false,
            "fileGrid": false,
            "imagePreview": false,
            "imageSizeValidate": false,
            "imageThumbnail": false,
            "imageThumbnailWidth": 500,
            "imageThumbnailHeight": 500,
            "fieldPdf": "",
            "pdfConvert": false,
            "pdfOriginal": true,
            "serverTransform": false,
            "imageOriginal": false,
            "imageEditor": true,
            "imageEditorOpen": true,
            "imageEditorCropRestrict": true,
            "imageEditorCropRatios": [{
                "label": "Landscape",
                "value": "4:3"
            }],
            "imageEditorUtils": [],
            "inputFields": [],
            "variantConfigs": [],
            "variantConfig": false
        }, {
            "uuid": "clvcngtfuiqq",
            "required": false,
            "hidden": false,
            "field": "image",
            "propertyTransform": true,
            "fieldProperty": "properties",
            "fieldId": "_cl-upload",
            "fieldThumbnail": "thumbnail",
            "fieldThumbnailPreview": true,
            "className": "",
            "label": "",
            "text": "",
            "selector": "",
            "conditionMode": 1,
            "conditions": [],
            "styles": {
                "file-grid": "0",
                "font-family": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\nHelvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',\n'Segoe UI Symbol'",
                "input-order": "top",
                "label-color": "#668aff",
                "file-counter": "0",
                "input-margin": "10.0px",
                "buttons-color": "#fff",
                "label-font-size": "24.0px",
                "label-color-drop": "#ffffff",
                "area-border-radius": "5.0px",
                "file-border-radius": "5.0px",
                "label-font-size-drop": "16.0px",
                "area-background-color": "#668aff",
                "file-background-color": "#e6ecff",
                "buttons-background-color": "#668aff",
                "upload-error-background-color": "#c44e47",
                "upload-success-background-color": "#435ba8"
            },
            "theme": "ocean",
            "css": "#clvcngtfuiqq .cl-hide{display:none!important}#clvcngtfuiqq .cl-upload--label{color:#668aff;font-size:24px;display:block}#clvcngtfuiqq .cl-upload--input-field{margin-bottom:10px}#clvcngtfuiqq .cl-upload--input{width:100%;box-sizing:border-box;padding:10px 18px;margin:0;border:1px solid #668aff;border-radius:5px}#clvcngtfuiqq input[type=checkbox].cl-upload--input,#clvcngtfuiqq input[type=radio].cl-upload--input{width:1.2em;cursor:pointer}#clvcngtfuiqq input[type=radio].cl-upload--input{vertical-align:middle;margin-right:10px}#clvcngtfuiqq input[type=color].cl-upload--input{width:40px;height:40px;cursor:pointer;padding:0;border:0}#clvcngtfuiqq input[type=radio]+.cl-upload-color-rect{margin-right:10px;margin-bottom:10px}#clvcngtfuiqq input[type=radio]:checked+.cl-upload-color-rect{border:2px solid #404040}#clvcngtfuiqq .cl-upload-color-rect{width:30px;height:30px;display:inline-block;vertical-align:middle;border-radius:3px}#clvcngtfuiqq .cl-upload--invalid{border-color:#b7423b}#clvcngtfuiqq .cl-upload--errors{overflow:hidden;transition:max-height 2s ease-out;max-height:0}#clvcngtfuiqq .cl-upload--errors.open{max-height:400px}#clvcngtfuiqq .cl-upload--error{text-align:center;font-size:16px;cursor:pointer;position:relative;opacity:1;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol';box-sizing:border-box;color:#fff;background-color:#c44e47;padding:.3rem .7rem;margin-bottom:.7rem;border:1px solid transparent;border-color:#b7423b;border-radius:5px}#clvcngtfuiqq .cl-upload--error:after{content:'x';position:absolute;right:1rem;top:.25rem}#clvcngtfuiqq .cl-upload--error.dismissed{opacity:0;transition:opacity .3s ease-out}#clvcngtfuiqq .filepond--root{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'}#clvcngtfuiqq .filepond--file-action-button{cursor:pointer;min-height:auto!important;height:1.625em}#clvcngtfuiqq .filepond--drop-label{color:#fff}#clvcngtfuiqq .filepond--drop-label label{cursor:pointer;width:auto!important;height:auto!important;position:relative!important;color:#fff!important;font-size:16px!important}#clvcngtfuiqq .filepond--drop-label u{cursor:pointer;text-decoration-color:#fff}#clvcngtfuiqq .filepond--label-action{text-decoration-color:#fff}#clvcngtfuiqq .filepond--panel-root{background-color:#668aff!important}#clvcngtfuiqq .filepond--panel-root{border-radius:5px}#clvcngtfuiqq .filepond--item-panel,#clvcngtfuiqq .filepond--file-poster-wrapper,#clvcngtfuiqq .filepond--image-preview-wrapper{border-radius:5px}#clvcngtfuiqq .filepond--item-panel{background-color:#e6ecff!important}#clvcngtfuiqq .filepond--drip-blob{background-color:#999}#clvcngtfuiqq .filepond--file-action-button{background-color:#668aff}#clvcngtfuiqq .filepond--file-action-button{color:#fff}#clvcngtfuiqq .filepond--file-action-button:hover,#clvcngtfuiqq .filepond--file-action-button:focus{box-shadow:0 0 0 .125em #fff}#clvcngtfuiqq .filepond--file{color:#000;font-size:16px}#clvcngtfuiqq [data-filepond-item-state*='error'] .filepond--item-panel,#clvcngtfuiqq [data-filepond-item-state*='invalid'] .filepond--item-panel{background-color:#c44e47!important}#clvcngtfuiqq [data-filepond-item-state*='invalid'] .filepond--file{color:#fff}#clvcngtfuiqq [data-filepond-item-state='processing-complete'] .filepond--item-panel{background-color:#435ba8!important}#clvcngtfuiqq [data-filepond-item-state='processing-complete'] .filepond--file{color:#fff}#clvcngtfuiqq .filepond--image-preview-overlay-idle{color:rgba(128,158,255,0.8)}#clvcngtfuiqq .filepond--image-preview{background-color:#e6ecff}#clvcngtfuiqq .filepond--image-preview-overlay-success{color:#435ba8}#clvcngtfuiqq .filepond--image-preview-overlay-failure{color:#c44e47}",
            "fileMimeTypes": ["image/*"],
            "fileMimeTypesValidate": true,
            "fileSizeMaxPlan": 5000,
            "fileMultiple": false,
            "fileCountMin": 0,
            "fileCountMax": 10,
            "fileCounter": false,
            "fileFetch": false,
            "fileSubmitRemove": true,
            "fileSubmitClear": false,
            "fileGrid": false,
            "imagePreview": false,
            "imageSizeValidate": false,
            "imageThumbnail": false,
            "imageThumbnailWidth": 500,
            "imageThumbnailHeight": 500,
            "fieldPdf": "",
            "pdfConvert": false,
            "pdfOriginal": true,
            "serverTransform": false,
            "imageOriginal": false,
            "imageEditor": true,
            "imageEditorOpen": true,
            "imageEditorCropRestrict": true,
            "imageEditorCropRatios": [{
                "label": "Landscape",
                "value": "5:3"
            }],
            "imageEditorUtils": [],
            "inputFields": [],
            "variantConfigs": [],
            "variantConfig": false
        }, {
            "uuid": "clnc9kb2fgmx",
            "required": false,
            "hidden": false,
            "field": "upload",
            "propertyTransform": true,
            "fieldProperty": "properties",
            "fieldId": "_cl-upload",
            "fieldThumbnail": "thumbnail",
            "fieldThumbnailPreview": true,
            "className": "",
            "label": "",
            "text": "",
            "selector": "",
            "conditionMode": 1,
            "conditions": [],
            "styles": {
                "file-grid": "0",
                "font-family": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\nHelvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',\n'Segoe UI Symbol'",
                "input-order": "top",
                "label-color": "#555",
                "file-counter": "0",
                "input-margin": "10.0px",
                "buttons-color": "#fff",
                "label-font-size": "16.0px",
                "label-color-drop": "#555",
                "area-border-radius": "5.0px",
                "file-border-radius": "5.0px",
                "label-font-size-drop": "16.0px",
                "area-background-color": "#eee",
                "file-background-color": "#555",
                "buttons-background-color": "rgba(0,0,0,0.5)",
                "upload-error-background-color": "#FF0000",
                "upload-success-background-color": "#008000"
            },
            "theme": "default",
            "css": "#clnc9kb2fgmx .cl-hide{display:none!important}#clnc9kb2fgmx .cl-upload--label{color:#555;font-size:16px;display:block}#clnc9kb2fgmx .cl-upload--input-field{margin-bottom:10px}#clnc9kb2fgmx .cl-upload--input{width:100%;box-sizing:border-box;padding:10px 18px;margin:0;border:1px solid #eee;border-radius:5px}#clnc9kb2fgmx input[type=checkbox].cl-upload--input,#clnc9kb2fgmx input[type=radio].cl-upload--input{width:1.2em;cursor:pointer}#clnc9kb2fgmx input[type=radio].cl-upload--input{vertical-align:middle;margin-right:10px}#clnc9kb2fgmx input[type=color].cl-upload--input{width:40px;height:40px;cursor:pointer;padding:0;border:0}#clnc9kb2fgmx input[type=radio]+.cl-upload-color-rect{margin-right:10px;margin-bottom:10px}#clnc9kb2fgmx input[type=radio]:checked+.cl-upload-color-rect{border:2px solid #404040}#clnc9kb2fgmx .cl-upload-color-rect{width:30px;height:30px;display:inline-block;vertical-align:middle;border-radius:3px}#clnc9kb2fgmx .cl-upload--invalid{border-color:#e60000}#clnc9kb2fgmx .cl-upload--errors{overflow:hidden;transition:max-height 2s ease-out;max-height:0}#clnc9kb2fgmx .cl-upload--errors.open{max-height:400px}#clnc9kb2fgmx .cl-upload--error{text-align:center;font-size:14px;cursor:pointer;position:relative;opacity:1;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol';box-sizing:border-box;color:#fff;background-color:#f00;padding:.3rem .7rem;margin-bottom:.7rem;border:1px solid transparent;border-color:#e60000;border-radius:5px}#clnc9kb2fgmx .cl-upload--error:after{content:'x';position:absolute;right:1rem;top:.25rem}#clnc9kb2fgmx .cl-upload--error.dismissed{opacity:0;transition:opacity .3s ease-out}#clnc9kb2fgmx .filepond--root{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'}#clnc9kb2fgmx .filepond--file-action-button{cursor:pointer;min-height:auto!important;height:1.625em}#clnc9kb2fgmx .filepond--drop-label{color:#555}#clnc9kb2fgmx .filepond--drop-label label{cursor:pointer;width:auto!important;height:auto!important;position:relative!important;color:#555!important;font-size:16px!important}#clnc9kb2fgmx .filepond--drop-label u{cursor:pointer;text-decoration-color:#555}#clnc9kb2fgmx .filepond--label-action{text-decoration-color:#555}#clnc9kb2fgmx .filepond--panel-root{background-color:#eee!important}#clnc9kb2fgmx .filepond--panel-root{border-radius:5px}#clnc9kb2fgmx .filepond--item-panel,#clnc9kb2fgmx .filepond--file-poster-wrapper,#clnc9kb2fgmx .filepond--image-preview-wrapper{border-radius:5px}#clnc9kb2fgmx .filepond--item-panel{background-color:#555!important}#clnc9kb2fgmx .filepond--drip-blob{background-color:#999}#clnc9kb2fgmx .filepond--file-action-button{background-color:rgba(0,0,0,0.5)}#clnc9kb2fgmx .filepond--file-action-button{color:#fff}#clnc9kb2fgmx .filepond--file-action-button:hover,#clnc9kb2fgmx .filepond--file-action-button:focus{box-shadow:0 0 0 .125em #fff}#clnc9kb2fgmx .filepond--file{color:#fff;font-size:16px}#clnc9kb2fgmx [data-filepond-item-state*='error'] .filepond--item-panel,#clnc9kb2fgmx [data-filepond-item-state*='invalid'] .filepond--item-panel{background-color:#f00!important}#clnc9kb2fgmx [data-filepond-item-state*='invalid'] .filepond--file{color:#fff}#clnc9kb2fgmx [data-filepond-item-state='processing-complete'] .filepond--item-panel{background-color:#008000!important}#clnc9kb2fgmx [data-filepond-item-state='processing-complete'] .filepond--file{color:#fff}#clnc9kb2fgmx .filepond--image-preview-overlay-idle{color:rgba(34,34,34,0.8)}#clnc9kb2fgmx .filepond--image-preview{background-color:#555}#clnc9kb2fgmx .filepond--image-preview-overlay-success{color:#008000}#clnc9kb2fgmx .filepond--image-preview-overlay-failure{color:#f00}",
            "fileMimeTypes": [],
            "fileMimeTypesValidate": false,
            "fileSizeMaxPlan": 5000,
            "fileMultiple": false,
            "fileCountMin": 0,
            "fileCountMax": 10,
            "fileCounter": false,
            "fileFetch": false,
            "fileSubmitRemove": true,
            "fileSubmitClear": false,
            "fileGrid": false,
            "imagePreview": false,
            "imageSizeValidate": false,
            "imageThumbnail": false,
            "imageThumbnailWidth": 500,
            "imageThumbnailHeight": 500,
            "fieldPdf": "",
            "pdfConvert": false,
            "pdfOriginal": true,
            "serverTransform": false,
            "imageOriginal": false,
            "imageEditor": true,
            "imageEditorOpen": true,
            "imageEditorCropRestrict": true,
            "imageEditorCropRatios": [{
                "label": "Portrait",
                "value": "2:3"
            }, {
                "label": "Landscape",
                "value": "3:2"
            }],
            "imageEditorUtils": [],
            "inputFields": [],
            "variantConfigs": [],
            "variantConfig": false
        }, {
            "uuid": "clevn2hu4hle",
            "required": false,
            "hidden": false,
            "field": "upload",
            "propertyTransform": true,
            "fieldProperty": "properties",
            "fieldId": "_cl-upload",
            "fieldThumbnail": "thumbnail",
            "fieldThumbnailPreview": true,
            "className": "",
            "label": "",
            "text": "",
            "selector": "",
            "conditionMode": 1,
            "conditions": [],
            "styles": {
                "file-grid": "0",
                "font-family": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\nHelvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',\n'Segoe UI Symbol'",
                "input-order": "top",
                "label-color": "#555",
                "file-counter": "0",
                "input-margin": "10.0px",
                "buttons-color": "#fff",
                "label-font-size": "16.0px",
                "label-color-drop": "#555",
                "area-border-radius": "5.0px",
                "file-border-radius": "5.0px",
                "label-font-size-drop": "16.0px",
                "area-background-color": "#eee",
                "file-background-color": "#555",
                "buttons-background-color": "rgba(0,0,0,0.5)",
                "upload-error-background-color": "#FF0000",
                "upload-success-background-color": "#008000"
            },
            "theme": "default",
            "css": "#clevn2hu4hle .cl-hide{display:none!important}#clevn2hu4hle .cl-upload--label{color:#555;font-size:16px;display:block}#clevn2hu4hle .cl-upload--input-field{margin-bottom:10px}#clevn2hu4hle .cl-upload--input{width:100%;box-sizing:border-box;padding:10px 18px;margin:0;border:1px solid #eee;border-radius:5px}#clevn2hu4hle input[type=checkbox].cl-upload--input,#clevn2hu4hle input[type=radio].cl-upload--input{width:1.2em;cursor:pointer}#clevn2hu4hle input[type=radio].cl-upload--input{vertical-align:middle;margin-right:10px}#clevn2hu4hle input[type=color].cl-upload--input{width:40px;height:40px;cursor:pointer;padding:0;border:0}#clevn2hu4hle input[type=radio]+.cl-upload-color-rect{margin-right:10px;margin-bottom:10px}#clevn2hu4hle input[type=radio]:checked+.cl-upload-color-rect{border:2px solid #404040}#clevn2hu4hle .cl-upload-color-rect{width:30px;height:30px;display:inline-block;vertical-align:middle;border-radius:3px}#clevn2hu4hle .cl-upload--invalid{border-color:#e60000}#clevn2hu4hle .cl-upload--errors{overflow:hidden;transition:max-height 2s ease-out;max-height:0}#clevn2hu4hle .cl-upload--errors.open{max-height:400px}#clevn2hu4hle .cl-upload--error{text-align:center;font-size:14px;cursor:pointer;position:relative;opacity:1;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol';box-sizing:border-box;color:#fff;background-color:#f00;padding:.3rem .7rem;margin-bottom:.7rem;border:1px solid transparent;border-color:#e60000;border-radius:5px}#clevn2hu4hle .cl-upload--error:after{content:'x';position:absolute;right:1rem;top:.25rem}#clevn2hu4hle .cl-upload--error.dismissed{opacity:0;transition:opacity .3s ease-out}#clevn2hu4hle .filepond--root{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'}#clevn2hu4hle .filepond--file-action-button{cursor:pointer;min-height:auto!important;height:1.625em}#clevn2hu4hle .filepond--drop-label{color:#555}#clevn2hu4hle .filepond--drop-label label{cursor:pointer;width:auto!important;height:auto!important;position:relative!important;color:#555!important;font-size:16px!important}#clevn2hu4hle .filepond--drop-label u{cursor:pointer;text-decoration-color:#555}#clevn2hu4hle .filepond--label-action{text-decoration-color:#555}#clevn2hu4hle .filepond--panel-root{background-color:#eee!important}#clevn2hu4hle .filepond--panel-root{border-radius:5px}#clevn2hu4hle .filepond--item-panel,#clevn2hu4hle .filepond--file-poster-wrapper,#clevn2hu4hle .filepond--image-preview-wrapper{border-radius:5px}#clevn2hu4hle .filepond--item-panel{background-color:#555!important}#clevn2hu4hle .filepond--drip-blob{background-color:#999}#clevn2hu4hle .filepond--file-action-button{background-color:rgba(0,0,0,0.5)}#clevn2hu4hle .filepond--file-action-button{color:#fff}#clevn2hu4hle .filepond--file-action-button:hover,#clevn2hu4hle .filepond--file-action-button:focus{box-shadow:0 0 0 .125em #fff}#clevn2hu4hle .filepond--file{color:#fff;font-size:16px}#clevn2hu4hle [data-filepond-item-state*='error'] .filepond--item-panel,#clevn2hu4hle [data-filepond-item-state*='invalid'] .filepond--item-panel{background-color:#f00!important}#clevn2hu4hle [data-filepond-item-state*='invalid'] .filepond--file{color:#fff}#clevn2hu4hle [data-filepond-item-state='processing-complete'] .filepond--item-panel{background-color:#008000!important}#clevn2hu4hle [data-filepond-item-state='processing-complete'] .filepond--file{color:#fff}#clevn2hu4hle .filepond--image-preview-overlay-idle{color:rgba(34,34,34,0.8)}#clevn2hu4hle .filepond--image-preview{background-color:#555}#clevn2hu4hle .filepond--image-preview-overlay-success{color:#008000}#clevn2hu4hle .filepond--image-preview-overlay-failure{color:#f00}",
            "fileMimeTypes": [],
            "fileMimeTypesValidate": false,
            "fileSizeMaxPlan": 5000,
            "fileMultiple": false,
            "fileCountMin": 0,
            "fileCountMax": 10,
            "fileCounter": false,
            "fileFetch": false,
            "fileSubmitRemove": true,
            "fileSubmitClear": false,
            "fileGrid": false,
            "imagePreview": false,
            "imageSizeValidate": false,
            "imageThumbnail": false,
            "imageThumbnailWidth": 500,
            "imageThumbnailHeight": 500,
            "fieldPdf": "",
            "pdfConvert": false,
            "pdfOriginal": true,
            "serverTransform": false,
            "imageOriginal": false,
            "imageEditor": true,
            "imageEditorOpen": true,
            "imageEditorCropRestrict": true,
            "imageEditorCropRatios": [{
                "label": "Portrait",
                "value": "2:3"
            }, {
                "label": "Landscape",
                "value": "3:2"
            }],
            "imageEditorUtils": [],
            "inputFields": [],
            "variantConfigs": [],
            "variantConfig": false
        }, {
            "uuid": "clv0wsykrz6y",
            "required": false,
            "hidden": false,
            "field": "upload",
            "propertyTransform": true,
            "fieldProperty": "properties",
            "fieldId": "_cl-upload",
            "fieldThumbnail": "thumbnail",
            "fieldThumbnailPreview": true,
            "className": "",
            "label": "",
            "text": "",
            "selector": "",
            "conditionMode": 1,
            "conditions": [{
                "field": "product",
                "operator": "equals",
                "value": "",
                "objects": [{
                    "id": "6541879246893",
                    "title": "Live Product Options Canvas Room",
                    "handle": "live-product-options-canvas-room"
                }],
                "tags": null
            }],
            "styles": {
                "file-grid": "0",
                "font-family": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\nHelvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',\n'Segoe UI Symbol'",
                "input-order": "top",
                "label-color": "#555",
                "file-counter": "0",
                "input-margin": "10.0px",
                "buttons-color": "#fff",
                "label-font-size": "16.0px",
                "label-color-drop": "#555",
                "area-border-radius": "5.0px",
                "file-border-radius": "5.0px",
                "label-font-size-drop": "16.0px",
                "area-background-color": "#eee",
                "file-background-color": "#555",
                "buttons-background-color": "rgba(0,0,0,0.5)",
                "upload-error-background-color": "#FF0000",
                "upload-success-background-color": "#008000"
            },
            "theme": "default",
            "css": "#clv0wsykrz6y .cl-hide{display:none!important}#clv0wsykrz6y .cl-upload--label{color:#555;font-size:16px;display:block}#clv0wsykrz6y .cl-upload--input-field{margin-bottom:10px}#clv0wsykrz6y .cl-upload--input{width:100%;box-sizing:border-box;padding:10px 18px;margin:0;border:1px solid #eee;border-radius:5px}#clv0wsykrz6y input[type=checkbox].cl-upload--input,#clv0wsykrz6y input[type=radio].cl-upload--input{width:1.2em;cursor:pointer}#clv0wsykrz6y input[type=radio].cl-upload--input{vertical-align:middle;margin-right:10px}#clv0wsykrz6y input[type=color].cl-upload--input{width:40px;height:40px;cursor:pointer;padding:0;border:0}#clv0wsykrz6y input[type=radio]+.cl-upload-color-rect{margin-right:10px;margin-bottom:10px}#clv0wsykrz6y input[type=radio]:checked+.cl-upload-color-rect{border:2px solid #404040}#clv0wsykrz6y .cl-upload-color-rect{width:30px;height:30px;display:inline-block;vertical-align:middle;border-radius:3px}#clv0wsykrz6y .cl-upload--invalid{border-color:#e60000}#clv0wsykrz6y .cl-upload--errors{overflow:hidden;transition:max-height 2s ease-out;max-height:0}#clv0wsykrz6y .cl-upload--errors.open{max-height:400px}#clv0wsykrz6y .cl-upload--error{text-align:center;font-size:14px;cursor:pointer;position:relative;opacity:1;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol';box-sizing:border-box;color:#fff;background-color:#f00;padding:.3rem .7rem;margin-bottom:.7rem;border:1px solid transparent;border-color:#e60000;border-radius:5px}#clv0wsykrz6y .cl-upload--error:after{content:'x';position:absolute;right:1rem;top:.25rem}#clv0wsykrz6y .cl-upload--error.dismissed{opacity:0;transition:opacity .3s ease-out}#clv0wsykrz6y .filepond--root{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'}#clv0wsykrz6y .filepond--file-action-button{cursor:pointer;min-height:auto!important;height:1.625em}#clv0wsykrz6y .filepond--drop-label{color:#555}#clv0wsykrz6y .filepond--drop-label label{cursor:pointer;width:auto!important;height:auto!important;position:relative!important;color:#555!important;font-size:16px!important}#clv0wsykrz6y .filepond--drop-label u{cursor:pointer;text-decoration-color:#555}#clv0wsykrz6y .filepond--label-action{text-decoration-color:#555}#clv0wsykrz6y .filepond--panel-root{background-color:#eee!important}#clv0wsykrz6y .filepond--panel-root{border-radius:5px}#clv0wsykrz6y .filepond--item-panel,#clv0wsykrz6y .filepond--file-poster-wrapper,#clv0wsykrz6y .filepond--image-preview-wrapper{border-radius:5px}#clv0wsykrz6y .filepond--item-panel{background-color:#555!important}#clv0wsykrz6y .filepond--drip-blob{background-color:#999}#clv0wsykrz6y .filepond--file-action-button{background-color:rgba(0,0,0,0.5)}#clv0wsykrz6y .filepond--file-action-button{color:#fff}#clv0wsykrz6y .filepond--file-action-button:hover,#clv0wsykrz6y .filepond--file-action-button:focus{box-shadow:0 0 0 .125em #fff}#clv0wsykrz6y .filepond--file{color:#fff;font-size:16px}#clv0wsykrz6y [data-filepond-item-state*='error'] .filepond--item-panel,#clv0wsykrz6y [data-filepond-item-state*='invalid'] .filepond--item-panel{background-color:#f00!important}#clv0wsykrz6y [data-filepond-item-state*='invalid'] .filepond--file{color:#fff}#clv0wsykrz6y [data-filepond-item-state='processing-complete'] .filepond--item-panel{background-color:#008000!important}#clv0wsykrz6y [data-filepond-item-state='processing-complete'] .filepond--file{color:#fff}#clv0wsykrz6y .filepond--image-preview-overlay-idle{color:rgba(34,34,34,0.8)}#clv0wsykrz6y .filepond--image-preview{background-color:#555}#clv0wsykrz6y .filepond--image-preview-overlay-success{color:#008000}#clv0wsykrz6y .filepond--image-preview-overlay-failure{color:#f00}",
            "fileMimeTypes": [],
            "fileMimeTypesValidate": false,
            "fileSizeMaxPlan": 5000,
            "fileMultiple": false,
            "fileCountMin": 0,
            "fileCountMax": 10,
            "fileCounter": false,
            "fileFetch": false,
            "fileSubmitRemove": true,
            "fileSubmitClear": false,
            "fileGrid": false,
            "imagePreview": false,
            "imageSizeValidate": false,
            "imageThumbnail": false,
            "imageThumbnailWidth": 500,
            "imageThumbnailHeight": 500,
            "fieldPdf": "",
            "pdfConvert": false,
            "pdfOriginal": true,
            "serverTransform": false,
            "imageOriginal": false,
            "imageEditor": false,
            "imageEditorOpen": true,
            "imageEditorCropRestrict": false,
            "imageEditorCropRatios": [{
                "label": "Free",
                "value": ""
            }, {
                "label": "Portrait",
                "value": "3:2"
            }, {
                "label": "Square",
                "value": "1:1"
            }, {
                "label": "Landscape",
                "value": "4:3"
            }],
            "imageEditorUtils": [],
            "inputFields": [],
            "variantConfigs": [],
            "variantConfig": false
        }]
    }
};

loadjs = (function () {
    /**
     * Global dependencies.
     * @global {Object} document - DOM
     */
    
    var devnull = function() {},
        bundleIdCache = {},
        bundleResultCache = {},
        bundleCallbackQueue = {};
    
    
    /**
     * Subscribe to bundle load event.
     * @param {string[]} bundleIds - Bundle ids
     * @param {Function} callbackFn - The callback function
     */
    function subscribe(bundleIds, callbackFn) {
      // listify
      bundleIds = bundleIds.push ? bundleIds : [bundleIds];
    
      var depsNotFound = [],
          i = bundleIds.length,
          numWaiting = i,
          fn,
          bundleId,
          r,
          q;
    
      // define callback function
      fn = function (bundleId, pathsNotFound) {
        if (pathsNotFound.length) depsNotFound.push(bundleId);
    
        numWaiting--;
        if (!numWaiting) callbackFn(depsNotFound);
      };
    
      // register callback
      while (i--) {
        bundleId = bundleIds[i];
    
        // execute callback if in result cache
        r = bundleResultCache[bundleId];
        if (r) {
          fn(bundleId, r);
          continue;
        }
    
        // add to callback queue
        q = bundleCallbackQueue[bundleId] = bundleCallbackQueue[bundleId] || [];
        q.push(fn);
      }
    }
    
    
    /**
     * Publish bundle load event.
     * @param {string} bundleId - Bundle id
     * @param {string[]} pathsNotFound - List of files not found
     */
    function publish(bundleId, pathsNotFound) {
      // exit if id isn't defined
      if (!bundleId) return;
    
      var q = bundleCallbackQueue[bundleId];
    
      // cache result
      bundleResultCache[bundleId] = pathsNotFound;
    
      // exit if queue is empty
      if (!q) return;
    
      // empty callback queue
      while (q.length) {
        q[0](bundleId, pathsNotFound);
        q.splice(0, 1);
      }
    }
    
    
    /**
     * Execute callbacks.
     * @param {Object or Function} args - The callback args
     * @param {string[]} depsNotFound - List of dependencies not found
     */
    function executeCallbacks(args, depsNotFound) {
      // accept function as argument
      if (args.call) args = {success: args};
    
      // success and error callbacks
      if (depsNotFound.length) (args.error || devnull)(depsNotFound);
      else (args.success || devnull)(args);
    }
    
    
    /**
     * Load individual file.
     * @param {string} path - The file path
     * @param {Function} callbackFn - The callback function
     */
    function loadFile(path, callbackFn, args, numTries) {
      var doc = document,
          async = args.async,
          maxTries = (args.numRetries || 0) + 1,
          beforeCallbackFn = args.before || devnull,
          pathname = path.replace(/[\?|#].*$/, ''),
          pathStripped = path.replace(/^(css|img)!/, ''),
          isLegacyIECss,
          e;
    
      numTries = numTries || 0;
    
      if (/(^css!|\.css$)/.test(pathname)) {
        // css
        e = doc.createElement('link');
        e.rel = 'stylesheet';
        e.href = pathStripped;
    
        // tag IE9+
        isLegacyIECss = 'hideFocus' in e;
    
        // use preload in IE Edge (to detect load errors)
        if (isLegacyIECss && e.relList) {
          isLegacyIECss = 0;
          e.rel = 'preload';
          e.as = 'style';
        }
      } else if (/(^img!|\.(png|gif|jpg|svg|webp)$)/.test(pathname)) {
        // image
        e = doc.createElement('img');
        e.src = pathStripped;    
      } else {
        // javascript
        e = doc.createElement('script');
        e.src = path;
        e.async = async === undefined ? true : async;
      }
    
      e.onload = e.onerror = e.onbeforeload = function (ev) {
        var result = ev.type[0];
    
        // treat empty stylesheets as failures to get around lack of onerror
        // support in IE9-11
        if (isLegacyIECss) {
          try {
            if (!e.sheet.cssText.length) result = 'e';
          } catch (x) {
            // sheets objects created from load errors don't allow access to
            // `cssText` (unless error is Code:18 SecurityError)
            if (x.code != 18) result = 'e';
          }
        }
    
        // handle retries in case of load failure
        if (result == 'e') {
          // increment counter
          numTries += 1;
    
          // exit function and try again
          if (numTries < maxTries) {
            return loadFile(path, callbackFn, args, numTries);
          }
        } else if (e.rel == 'preload' && e.as == 'style') {
          // activate preloaded stylesheets
          return e.rel = 'stylesheet'; // jshint ignore:line
        }
        
        // execute callback
        callbackFn(path, result, ev.defaultPrevented);
      };
    
      // add to document (unless callback returns `false`)
      if (beforeCallbackFn(path, e) !== false) doc.head.appendChild(e);
    }
    
    
    /**
     * Load multiple files.
     * @param {string[]} paths - The file paths
     * @param {Function} callbackFn - The callback function
     */
    function loadFiles(paths, callbackFn, args) {
      // listify paths
      paths = paths.push ? paths : [paths];
    
      var numWaiting = paths.length,
          x = numWaiting,
          pathsNotFound = [],
          fn,
          i;
    
      // define callback function
      fn = function(path, result, defaultPrevented) {
        // handle error
        if (result == 'e') pathsNotFound.push(path);
    
        // handle beforeload event. If defaultPrevented then that means the load
        // will be blocked (ex. Ghostery/ABP on Safari)
        if (result == 'b') {
          if (defaultPrevented) pathsNotFound.push(path);
          else return;
        }
    
        numWaiting--;
        if (!numWaiting) callbackFn(pathsNotFound);
      };
    
      // load scripts
      for (i=0; i < x; i++) loadFile(paths[i], fn, args);
    }
    
    
    /**
     * Initiate script load and register bundle.
     * @param {(string|string[])} paths - The file paths
     * @param {(string|Function|Object)} [arg1] - The (1) bundleId or (2) success
     *   callback or (3) object literal with success/error arguments, numRetries,
     *   etc.
     * @param {(Function|Object)} [arg2] - The (1) success callback or (2) object
     *   literal with success/error arguments, numRetries, etc.
     */
    function loadjs(paths, arg1, arg2) {
      var bundleId,
          args;
    
      // bundleId (if string)
      if (arg1 && arg1.trim) bundleId = arg1;
    
      // args (default is {})
      args = (bundleId ? arg2 : arg1) || {};
    
      // throw error if bundle is already defined
      if (bundleId) {
        if (bundleId in bundleIdCache) {
          throw "LoadJS";
        } else {
          bundleIdCache[bundleId] = true;
        }
      }
    
      function loadFn(resolve, reject) {
        loadFiles(paths, function (pathsNotFound) {
          // execute callbacks
          executeCallbacks(args, pathsNotFound);
          
          // resolve Promise
          if (resolve) {
            executeCallbacks({success: resolve, error: reject}, pathsNotFound);
          }
    
          // publish bundle load event
          publish(bundleId, pathsNotFound);
        }, args);
      }
      
      if (args.returnPromise) return new Promise(loadFn);
      else loadFn();
    }
    
    
    /**
     * Execute callbacks when dependencies have been satisfied.
     * @param {(string|string[])} deps - List of bundle ids
     * @param {Object} args - success/error arguments
     */
    loadjs.ready = function ready(deps, args) {
      // subscribe to bundle load event
      subscribe(deps, function (depsNotFound) {
        // execute callbacks
        executeCallbacks(args, depsNotFound);
      });
    
      return loadjs;
    };
    
    
    /**
     * Manually satisfy bundle dependencies.
     * @param {string} bundleId - The bundle id
     */
    loadjs.done = function done(bundleId) {
      publish(bundleId, []);
    };
    
    
    /**
     * Reset loadjs dependencies statuses
     */
    loadjs.reset = function reset() {
      bundleIdCache = {};
      bundleResultCache = {};
      bundleCallbackQueue = {};
    };
    
    
    /**
     * Determine if bundle has already been defined
     * @param String} bundleId - The bundle id
     */
    loadjs.isDefined = function isDefined(bundleId) {
      return bundleId in bundleIdCache;
    };
    
    
    // export
    return loadjs;
    
    })();


!function(e) {
    loadjs(e.resources, "assets", {
        success: function() {
            var n, t = "csvupload." + e.app + ".ready";
            "function" == typeof Event ? n = new Event(t) : (n = document.createEvent("Event")).initEvent(t, !0, !0),
            window.dispatchEvent(n)
        },
        error: function(e) {
            console.error("failed to load assets", e)
        }
    })
}(window.csvupload.upload.config);

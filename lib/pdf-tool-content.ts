import type { ToolFAQ, ToolStep } from "@/components/ui/ToolShell";

export interface PdfToolContent {
  aboutText: string;
  steps: ToolStep[];
  faqs: ToolFAQ[];
}

/**
 * Tool-specific About / How-to-use / FAQ copy for every PDF-category tool.
 * ToolShell falls back to generic copy when a tool id has no entry here.
 */
export const pdfToolContent: Record<string, PdfToolContent> = {
  "pdf-to-word": {
    aboutText:
      "PDF to Word runs locally and creates either page images in Word or approximate editable text and detected tables. Page images retain appearance but their text is not independently editable.",
    steps: [
      { title: "Upload your PDF", description: "Drop a PDF file or click to browse. It's rendered locally and never uploaded." },
      { title: "Pick a conversion mode", description: "Page images retain the page appearance; editable mode reconstructs horizontal text and detected tables." },
      { title: "Download the .docx", description: "Open it directly in Word, Google Docs, or any compatible editor." },
    ],
    faqs: [
      { question: "Is PDF to Word free to use?", answer: "Yes, PDF to Word is completely free without signup or added branding. File-size, page-count and request limits apply." },
      { question: "Will the layout stay the same?", answer: "Page-image mode embeds the rendered page. Editable mode reconstructs supported text and tables; original graphics, fonts and complex layouts are not retained. Review the result in your editor." },
      { question: "Does this work on scanned PDFs?", answer: "Image-only documents can attempt English OCR in editable mode. For mixed scanned/text pages, run OCR PDF first. Page-image mode does not require selectable text." },
      { question: "How do I convert a PDF into an editable Word document?", answer: "Choose the editable conversion mode. It reconstructs horizontal text and detected tables into a .docx you can edit in Word or Google Docs. The other mode embeds page images, which look exact but are not editable text." },
    ],
  },
  "word-to-pdf": {
    aboutText:
      "Word to PDF offers local browser rendering and, when configured, a server Office engine. Fonts, pagination and complex layouts can differ; review the output before sharing.",
    steps: [
      { title: "Upload a .docx file", description: "Legacy .doc files should be saved as .docx in Word first." },
      { title: "Let it render", description: "Choose local browser processing or the configured server engine, which uploads the document." },
      { title: "Download the PDF", description: "Review page breaks, fonts and images in the downloaded PDF." },
    ],
    faqs: [
      { question: "Is Word to PDF free to use?", answer: "Yes, Word to PDF is completely free without signup or added branding. File-size, page-count and request limits apply." },
      { question: "Are my files uploaded anywhere?", answer: "Browser processing stays on your device. Choosing the server Office engine uploads the document to the configured conversion service." },
      { question: "Does this support old .doc files?", answer: "Not yet. Save the file as .docx in Word, then convert." },
      { question: "How do I convert a Word document to PDF without losing formatting?", answer: "Upload the .docx and download the rendered PDF, then review page breaks, fonts and images before sharing. Browser rendering can substitute fonts and shift pagination on complex layouts; where the server Office engine is configured, it renders with a real Office engine for a closer match." },
      { question: "Can I convert DOCX to PDF on my phone without installing an app?", answer: "Yes. The converter runs in your phone's browser, so you can turn a .docx into a PDF on Android or iPhone with nothing to install." },
      { question: "Can I turn my resume in Word into a PDF for job applications?", answer: "Yes — upload the .docx resume and download the PDF version employers expect. Check fonts and page breaks in the result first, since rendering can differ slightly from Word." },
    ],
  },
  "pdf-to-excel": {
    aboutText:
      "PDF to Excel extracts the text content of every page into its own worksheet, so lists and tabular data can be reused in a spreadsheet.",
    steps: [
      { title: "Upload your PDF", description: "The file is read locally to pull out selectable text." },
      { title: "Review the extracted text", description: "Each PDF page becomes a separate sheet in the workbook." },
      { title: "Download the .xlsx file", description: "Open it in Excel, Google Sheets, or any spreadsheet app." },
    ],
    faqs: [
      { question: "Is PDF to Excel free to use?", answer: "Yes, PDF to Excel is completely free without signup or added branding. File-size, page-count and request limits apply." },
      { question: "Will tables keep their columns?", answer: "Aligned horizontal tables can retain separate text cells. Complex grids, formulas, graphics and original styling are not reconstructed." },
      { question: "Does this work on scanned PDFs?", answer: "Image-only documents can attempt English OCR, producing text rather than reconstructed table formulas. Mixed scanned/text pages may need OCR PDF first." },
    ],
  },
  "excel-to-pdf": {
    aboutText:
      "Excel to PDF offers local table rendering and, for XLSX when configured, a server Office engine. Native processing recalculates supported formulas; verify important totals and print layout.",
    steps: [
      { title: "Upload a spreadsheet", description: ".xls, .xlsx, and .csv files are all supported." },
      { title: "Let each sheet render", description: "Sheets are drawn as tables in the order they appear in the workbook." },
      { title: "Download the PDF", description: "Review sheet pagination, columns, charts and formula values before sharing." },
    ],
    faqs: [
      { question: "Is Excel to PDF free to use?", answer: "Yes, Excel to PDF is completely free without signup or added branding. File-size, page-count and request limits apply." },
      { question: "Are my files uploaded anywhere?", answer: "Browser processing stays local. Selecting the server engine uploads the XLSX file; supported formulas are recalculated and Excel-specific functions may differ." },
      { question: "Does this work on mobile devices?", answer: "Yes, it works on phones, tablets, and desktop browsers." },
    ],
  },
  "pdf-to-powerpoint": {
    aboutText:
      "PDF to PowerPoint creates a slide image for each page. Text is not independently editable. The presentation uses one slide size, based on the first source page.",
    steps: [
      { title: "Upload your PDF", description: "Each page is rendered locally at high resolution." },
      { title: "Let it build slides", description: "One image slide is created per page; mixed page sizes are fitted to the common slide size." },
      { title: "Download the .pptx", description: "Open it in PowerPoint, Keynote, or Google Slides." },
    ],
    faqs: [
      { question: "Is PDF to PowerPoint free to use?", answer: "Yes, PDF to PowerPoint is completely free without signup or added branding. File-size, page-count and request limits apply." },
      { question: "Can I edit the text on each slide?", answer: "Slides contain rendered page images, so text and individual graphics cannot be edited separately." },
      { question: "Does this work on scanned PDFs?", answer: "Yes, since each page is rendered as an image, scanned pages convert just as well as text pages." },
    ],
  },
  "powerpoint-to-pdf": {
    aboutText:
      "PowerPoint to PDF offers a limited local browser converter and, when configured, a server Office engine for mixed text, images and slide objects. Review fonts and complex slide features.",
    steps: [
      { title: "Upload a .pptx file", description: "Legacy .ppt files should be saved as .pptx first." },
      { title: "Let it read each slide", description: "Browser processing supports limited slide content. Choose the configured server engine for mixed content; it uploads the presentation." },
      { title: "Download the PDF", description: "Share it anywhere a PDF is easier than a deck." },
    ],
    faqs: [
      { question: "Is PowerPoint to PDF free to use?", answer: "Yes, PowerPoint to PDF is completely free without signup or added branding. File-size, page-count and request limits apply." },
      { question: "Does this keep images and slide design?", answer: "The browser option rejects unsupported mixed-content slides. The configured server engine renders supported slide objects, but fonts, SmartArt and other complex features can differ." },
      { question: "Does this support old .ppt files?", answer: "Not yet. Save the file as .pptx in PowerPoint, then convert." },
    ],
  },
  "pdf-to-jpg": {
    aboutText:
      "PDF to JPG renders each page of your PDF as a JPG image directly in your browser, ready to download individually or as a ZIP.",
    steps: [
      { title: "Upload your PDF", description: "Every page is rendered locally onto a canvas." },
      { title: "Choose render quality", description: "Pick Draft, Standard, or High resolution before converting." },
      { title: "Download the images", description: "Single pages download directly; multi-page results come as a ZIP." },
    ],
    faqs: [
      { question: "Is PDF to JPG free to use?", answer: "Yes, PDF to JPG is completely free without signup or added branding. File-size, page-count and request limits apply." },
      { question: "What resolution should I pick?", answer: "Standard (2×) suits most uses. Use High (3×) for print or close zooming." },
      { question: "Does this work on mobile devices?", answer: "Yes, it works on phones, tablets, and desktop browsers." },
      { question: "Can I download PDF pages as JPG images one by one?", answer: "Yes. Each page is rendered as its own JPG — single pages download directly, and multi-page results are also offered as a ZIP." },
      { question: "Can I extract the original images embedded in a PDF?", answer: "This tool renders each whole page as a JPG rather than extracting embedded image files at their original resolution. If a page is mostly one photo, choose the High (3×) render quality for the closest result." },
    ],
  },
  "jpg-to-pdf": {
    aboutText:
      "JPG to PDF combines one or more JPG images into a single PDF, in the order you set.",
    steps: [
      { title: "Upload your JPGs", description: "Add one or more images; order matters for the final PDF." },
      { title: "Reorder if needed", description: "Use the up/down arrows on each file chip before converting." },
      { title: "Download the PDF", description: "Get one PDF with every image placed on its own page." },
    ],
    faqs: [
      { question: "Is JPG to PDF free to use?", answer: "Yes, JPG to PDF is completely free without signup or added branding. File-size, page-count and request limits apply." },
      { question: "Can I control the page size?", answer: "Yes, choose Fit to image, A4, or Letter before converting." },
      { question: "Does this work on mobile devices?", answer: "Yes, it works on phones, tablets, and desktop browsers." },
      { question: "Can I convert multiple JPG photos into one single PDF?", answer: "Yes. Add as many JPGs as you need and the tool builds one PDF with every image on its own page, in the order you set." },
      { question: "Can I make a PDF from photos of documents like a passport, ID or certificates?", answer: "Yes — this is a common way to prepare document uploads. Photograph or scan each document as a JPG, add the images in order, and choose the A4 page size if the receiving form expects standard pages." },
      { question: "Can I arrange the images in order before making the PDF?", answer: "Yes. Use the up/down arrows on each file chip to set the order first; the pages of the PDF follow the order you choose." },
    ],
  },
  "png-to-pdf": {
    aboutText:
      "PNG to PDF combines one or more PNG images into a single PDF, keeping the order you set. It runs entirely in your browser, so the images are never uploaded — handy for bundling screenshots, scanned pages or exported designs into one document you can share or print.",
    steps: [
      { title: "Upload your PNGs", description: "Add one or more images; order matters for the final PDF." },
      { title: "Reorder if needed", description: "Use the up/down arrows on each file chip before converting." },
      { title: "Download the PDF", description: "Transparent areas convert to a solid white page background." },
    ],
    faqs: [
      { question: "Is PNG to PDF free to use?", answer: "Yes, PNG to PDF is completely free without signup or added branding. File-size, page-count and request limits apply." },
      { question: "What happens to transparency?", answer: "PDF pages have no alpha channel, so transparent pixels render as solid white." },
      { question: "Does this work on mobile devices?", answer: "Yes, it works on phones, tablets, and desktop browsers." },
      { question: "How do I convert multiple PNG images into a single PDF?", answer: "Add all the PNG files, then use the up and down arrows on each file chip to set the order — the PDF follows that order from first chip to last. Convert once and you get one PDF containing every image as its own page." },
      { question: "Can I rearrange the images before creating the PDF?", answer: "Yes. Each added image appears as a file chip with up and down arrows; move the chips until the order looks right, then convert. The page order in the downloaded PDF matches the chip order." },
      { question: "Can I turn PNG screenshots into one PDF for sharing?", answer: "Yes — that is a typical use. Add the screenshots in the order you want them read, convert, and share the single PDF instead of sending a pile of separate image files. It all happens in your browser, so nothing is uploaded." },
    ],
  },
  "pdf-to-png": {
    aboutText:
      "PDF to PNG renders each page as a lossless PNG image, ideal for pages with diagrams, screenshots, or fine text detail. Every page becomes its own PNG file: download single pages directly, or take a multi-page result as one ZIP. The rendering happens locally in your browser, so your document never leaves your device.",
    steps: [
      { title: "Upload your PDF", description: "Every page is rendered locally onto a canvas." },
      { title: "Choose render quality", description: "Pick Draft, Standard, or High resolution before converting." },
      { title: "Download the images", description: "Single pages download directly; multi-page results come as a ZIP." },
    ],
    faqs: [
      { question: "Is PDF to PNG free to use?", answer: "Yes, PDF to PNG is completely free without signup or added branding. File-size, page-count and request limits apply." },
      { question: "Why PNG instead of JPG?", answer: "PNG is lossless, so text and line art stay crisp — useful for diagrams and screenshots." },
      { question: "Does this work on mobile devices?", answer: "Yes, it works on phones, tablets, and desktop browsers." },
      { question: "How do I convert PDF pages to PNG images for free?", answer: "Upload the PDF, choose a render quality, and convert. Each page is rendered as a PNG in your browser — download the pages you need one by one, or download the whole set as a ZIP." },
      { question: "Can I download just one page of the PDF as a PNG?", answer: "Yes. Every page is rendered, and single pages can be downloaded directly, so you can take only the page you need instead of saving the full ZIP." },
      { question: "Which render quality should I pick for sharp text?", answer: "Choose High when small text, diagrams or line art must stay crisp, Standard for everyday use, and Draft when you need a quick, light preview of a long document. Higher quality renders larger image files." },
    ],
  },
  "merge-pdf": {
    aboutText:
      "Merge PDF combines two or more PDF files into a single document, keeping every file's pages in the order you set.",
    steps: [
      { title: "Upload 2 or more PDFs", description: "Drop multiple files or add them one at a time." },
      { title: "Reorder the files", description: "Use the up/down arrows so files merge in the order you want." },
      { title: "Merge & download", description: "Get one combined PDF with every page from every file." },
    ],
    faqs: [
      { question: "Is Merge PDF free to use?", answer: "Yes, Merge PDF is completely free without signup or added branding. File-size, page-count and request limits apply." },
      { question: "Does file order matter?", answer: "Yes. Pages are combined in the order the files are listed — reorder them with the arrows before merging." },
      { question: "Is there a file size limit?", answer: "There's no fixed limit, but very large or numerous files take longer to process in the browser." },
      { question: "How do I combine PDF files into one without losing quality?", answer: "Merging copies each file's pages into the new document exactly as they are — pages are not re-compressed or re-rendered, so text, images and quality stay the same as in the original files." },
      { question: "Can I merge PDF files on my phone?", answer: "Yes. The tool runs in your phone's browser on Android or iPhone, so you can combine PDFs without installing an app." },
      { question: "Can I merge a PDF and JPG files together into one document?", answer: "Not directly — Merge PDF accepts PDF files only. Convert the JPG with JPG to PDF first, then add the resulting PDF here and merge everything into one document." },
      { question: "Is Merge PDF a free PDF combiner?", answer: "Yes — it works as a free PDF combiner: join multiple PDFs into one file, in any order you set with the arrows, and download the combined document." },
    ],
  },
  "split-pdf": {
    aboutText:
      "Split PDF extracts specific pages into a new document, or breaks a file into equal-sized parts delivered as a ZIP.",
    steps: [
      { title: "Upload one PDF", description: "The tool reads the page count automatically." },
      { title: "Choose a split mode", description: "Extract a page range into one file, or split every N pages into a ZIP." },
      { title: "Download the result", description: "Get a single PDF, or a ZIP of PDF parts." },
    ],
    faqs: [
      { question: "Is Split PDF free to use?", answer: "Yes, Split PDF is completely free without signup or added branding. File-size, page-count and request limits apply." },
      { question: "How do I write a page range?", answer: "Use comma-separated numbers and ranges, e.g. \"1-3, 5\", matching the page numbers shown in your viewer." },
      { question: "Does this work on mobile devices?", answer: "Yes, it works on phones, tablets, and desktop browsers." },
      { question: "How do I extract only the pages I need from a PDF?", answer: "Choose the extract mode and enter the pages to keep — for example \"1-3, 5\" — and the tool builds a single new PDF containing just those pages." },
      { question: "Can I separate a PDF into individual one-page files?", answer: "Yes. Use the split-every-N-pages mode with N set to 1, and the tool delivers a ZIP of one-page PDFs." },
    ],
  },
  "compress-pdf": {
    aboutText:
      "Compress PDF optimizes embedded JPEG images and PDF structure in your browser while keeping text, links and page sizes intact. An optional Flatten pages mode creates an image-only copy. Files up to 200 MB are accepted; processing depends on your device's memory, and the output is never larger than the original.",
    steps: [
      { title: "Upload a PDF", description: "Check the original file size shown after upload." },
      { title: "Pick a compression level", description: "Balanced works for most files; Smallest file trades more quality for size." },
      { title: "Compress & download", description: "Compare the before/after size, then download the result." },
    ],
    faqs: [
      { question: "Is Compress PDF free to use?", answer: "Yes, Compress PDF is completely free without signup or added branding. File-size, page-count and request limits apply." },
      { question: "Will text stay selectable?", answer: "Yes, the recommended Keep text selectable mode preserves text and links. The optional Flatten pages mode converts pages to images and removes selectable text and interactive links." },
      { question: "What if the file doesn't shrink?", answer: "For text-heavy PDFs that are already small, the tool falls back to a lossless optimization pass instead of producing a larger file." },
      { question: "How do I compress a PDF to 200 KB for an online application form?", answer: "There is no exact-size dial. Upload the file, choose the Smallest file level, and compare the before/after size shown by the tool. How far a file shrinks depends on its content: PDFs with large scanned images compress the most, while text-heavy files may already be close to their smallest size." },
      { question: "How do I make a PDF small enough to email?", answer: "Compress the file and check the resulting size before attaching it. Many email providers cap attachments at around 25 MB, and the tool never produces a file larger than your original." },
      { question: "Can I make a PDF smaller without losing quality?", answer: "Partly. The recommended mode keeps text and links intact while optimizing embedded images and file structure. Higher compression trades some image quality for size, and text-heavy PDFs that are already small get a lossless optimization pass instead of a larger output." },
    ],
  },
  "rotate-pdf": {
    aboutText:
      "Rotate PDF turns every page in a document by 90, 180, or 270 degrees — useful for scans saved sideways or upside down. It is the standard fix for documents fed through a scanner the wrong way round: upload, pick the angle, and download a copy that opens the right way up in any reader.",
    steps: [
      { title: "Upload your PDF", description: "Works with any standard PDF." },
      { title: "Choose a rotation angle", description: "Pick 90°, 180°, or 270° clockwise." },
      { title: "Rotate & download", description: "Every page in the document is rotated together." },
    ],
    faqs: [
      { question: "Is Rotate PDF free to use?", answer: "Yes, Rotate PDF is completely free without signup or added branding. File-size, page-count and request limits apply." },
      { question: "Can I rotate just one page?", answer: "This tool rotates every page at once. For per-page control, rotate the file, then use Rearrange PDF Pages to fine-tune order." },
      { question: "Does this work on mobile devices?", answer: "Yes, it works on phones, tablets, and desktop browsers." },
      { question: "How do I fix a PDF that was scanned sideways?", answer: "Upload the PDF and choose 90° if the pages lean one way or 270° if they lean the other; 180° fixes pages that are completely upside down. Every page is turned together, and the rotated result is what you download." },
      { question: "Can I rotate a PDF permanently, not just in the viewer?", answer: "Yes. The rotation is applied to the pages in the file you download, so it stays rotated in any PDF reader or when printed — it is not just a temporary view setting." },
      { question: "Does rotating a PDF change the text or images on the pages?", answer: "No. Rotating only changes each page's orientation; the text, images and layout on the pages are left exactly as they were." },
    ],
  },
  "unlock-pdf": {
    aboutText:
      "Unlock PDF removes the open password from a PDF you already have access to, so it opens without a prompt every time.",
    steps: [
      { title: "Upload the protected PDF", description: "Files stay on your device throughout." },
      { title: "Enter the password", description: "Only needed if the file requires one to open." },
      { title: "Unlock & download", description: "Get a copy without the open-password restriction." },
    ],
    faqs: [
      { question: "Is Unlock PDF free to use?", answer: "Yes, Unlock PDF is completely free without signup or added branding. File-size, page-count and request limits apply." },
      { question: "Can I unlock a PDF I don't own?", answer: "Only unlock PDFs you own or have explicit permission to open." },
      { question: "Is my password stored anywhere?", answer: "No. The password is used locally in your browser only, and is never stored or uploaded." },
      { question: "Can I add a password to a PDF instead of removing one?", answer: "Yes — use the Protect PDF tool. It adds an open password and can restrict printing, copying and editing, with encryption done locally in your browser." },
    ],
  },
  "protect-pdf": {
    aboutText:
      "Protect PDF adds a password and restricts printing, copying, and editing on a PDF — encrypted entirely in your browser.",
    steps: [
      { title: "Upload your PDF", description: "Works with any standard, unencrypted PDF." },
      { title: "Set a password", description: "Enter and confirm the password that will be required to open the file." },
      { title: "Encrypt & download", description: "Get a password-protected copy of your PDF." },
    ],
    faqs: [
      { question: "Is Protect PDF free to use?", answer: "Yes, Protect PDF is completely free without signup or added branding. File-size, page-count and request limits apply." },
      { question: "Is my password stored anywhere?", answer: "No. Encryption happens locally and the password is never stored or uploaded." },
      { question: "Does this work on mobile devices?", answer: "Yes, it works on phones, tablets, and desktop browsers." },
      { question: "How do I remove a password I added to a PDF?", answer: "Use the Unlock PDF tool with the password you set. It produces a copy without the open-password restriction, entirely in your browser." },
    ],
  },
  "edit-pdf": {
    aboutText:
      "Edit PDF adds a text overlay or a whiteout box to a chosen page — useful for quick annotations, approvals, or light redaction.",
    steps: [
      { title: "Upload your PDF", description: "Pick the page you want to edit." },
      { title: "Choose text or whiteout", description: "Add overlay text, or cover an area with a solid box." },
      { title: "Position & apply", description: "Adjust size and placement, then apply the edit to the PDF." },
    ],
    faqs: [
      { question: "Is Edit PDF free to use?", answer: "Yes, Edit PDF is completely free without signup or added branding. File-size, page-count and request limits apply." },
      { question: "Can I edit multiple pages at once?", answer: "Apply an edit to one page, download the result, then repeat on additional pages as needed." },
      { question: "Is whiteout true redaction?", answer: "Whiteout covers content visually. For sensitive documents, verify the underlying text was removed before sharing." },
      { question: "Can I add text to a PDF without Adobe Acrobat?", answer: "Yes. Upload the PDF, choose the text overlay, type your text, position it on the page and apply — everything runs in your browser, with no Acrobat or other software to install." },
      { question: "Can I fill in a PDF form with this tool?", answer: "Not field by field — the editor does not fill interactive form fields. For a flat form, place a text overlay where each answer belongs, one page at a time, which produces the same filled-in appearance." },
      { question: "Can I highlight, draw on, or insert images into a PDF?", answer: "No. This editor adds text overlays and whiteout boxes only — there are no highlight, drawing or image-insertion tools." },
    ],
  },
  "ocr-pdf": {
    aboutText:
      "OCR PDF recognizes printed English text locally and creates searchable PDF or plain text. Up to 10 pages can be processed per run; scan quality affects accuracy and text alignment is approximate.",
    steps: [
      { title: "Upload a scanned PDF", description: "Works best on clear, high-contrast scans." },
      { title: "Choose an output", description: "Get a searchable PDF with a text layer, or plain .txt text." },
      { title: "Run OCR", description: "Keep the tab open — recognition runs page by page in your browser." },
    ],
    faqs: [
      { question: "Is OCR PDF free to use?", answer: "Yes, OCR PDF is completely free without signup or added branding. File-size, page-count and request limits apply." },
      { question: "How long does OCR take?", answer: "It depends on page count and image size — usually a few seconds per page, longer for large or high-resolution scans." },
      { question: "How accurate is the text?", answer: "Accuracy depends on scan quality. Clear, high-contrast, well-aligned scans OCR best." },
      { question: "How do I make a scanned PDF searchable and selectable?", answer: "Upload the scan, choose the searchable PDF output and run OCR. The tool adds a recognized text layer over the pages — alignment is approximate — so you can search and select the text afterwards." },
      { question: "Can I turn a scanned document into copyable text?", answer: "Yes. Choose the plain text (.txt) output to get the recognized text on its own, or use the searchable PDF output and copy text from the pages. Recognition covers printed English text." },
      { question: "Does OCR run without uploading my PDF to a server?", answer: "Yes. Recognition runs locally in your browser — the file is not uploaded, and you keep the tab open while pages are processed one by one." },
    ],
  },
  "sign-pdf": {
    aboutText:
      "Sign PDF adds a typed or hand-drawn signature to a chosen page — a lightweight way to approve documents without certificate-based signing.",
    steps: [
      { title: "Upload your PDF", description: "Choose which page the signature should appear on." },
      { title: "Type or draw a signature", description: "Type a name, or draw one with your mouse or finger." },
      { title: "Apply & download", description: "Get a copy of the PDF with your signature placed on the page." },
    ],
    faqs: [
      { question: "Is Sign PDF free to use?", answer: "Yes, Sign PDF is completely free without signup or added branding. File-size, page-count and request limits apply." },
      { question: "Is this a legally binding e-signature?", answer: "This adds a visual signature mark, not a certified digital signature. Check your requirements before using it for legal documents." },
      { question: "Does this work on mobile devices?", answer: "Yes — drawing works with touch or a mouse on phones, tablets, and desktops." },
      { question: "Can I sign a PDF without printing or scanning it?", answer: "Yes. Upload the document, add your signature on screen, and download the signed copy — no printer, scanner or paper copy is involved." },
      { question: "How do I create an electronic signature and place it on a PDF?", answer: "Type your name or draw your signature with a mouse or finger, then position it on the chosen page and apply. The result is a visual signature mark, not a certified digital signature." },
    ],
  },
  "watermark-pdf": {
    aboutText:
      "Watermark PDF stamps text across every page, either centered once or tiled, at the opacity and angle you choose. Typical uses are stamping 'Draft' or 'Confidential' on working documents, or putting a name across handouts and reports before they are shared. The stamping happens locally in your browser, so the document is never uploaded.",
    steps: [
      { title: "Upload your PDF", description: "Works with any standard PDF." },
      { title: "Set the watermark text and style", description: "Adjust opacity, font size, angle, and placement." },
      { title: "Apply & download", description: "Every page gets the same watermark applied." },
    ],
    faqs: [
      { question: "Is Watermark PDF free to use?", answer: "Yes, Watermark PDF is completely free without signup or added branding. File-size, page-count and request limits apply." },
      { question: "Can I tile the watermark across the page?", answer: "Yes, switch placement to Tiled to repeat the text across the whole page." },
      { question: "Does this work on mobile devices?", answer: "Yes, it works on phones, tablets, and desktop browsers." },
      { question: "How do I add a text watermark to every page of a PDF?", answer: "Upload the PDF, type your watermark text, then set the opacity, font size, angle and placement. Apply it and download — the same watermark is stamped on every page of the document." },
      { question: "Can I stamp 'Confidential' diagonally across each page?", answer: "Yes. Set the watermark text to 'Confidential', keep the centered placement, and adjust the angle so the text runs diagonally. Lower the opacity if you want the page content to stay easy to read underneath." },
      { question: "Can a watermark added here be removed from the PDF later?", answer: "The watermark is stamped into the pages of the downloaded file, and this tool has no un-watermark step — so keep your original, unwatermarked PDF if you might need a clean copy later." },
    ],
  },
  "delete-pdf-pages": {
    aboutText:
      "Delete PDF Pages removes the pages you list from a document and rebuilds a clean PDF with the rest. People use it to strip blank pages out of scans, remove a cover sheet, or cut pages they do not want to pass on before sharing a document. It runs in your browser, so the file is never uploaded.",
    steps: [
      { title: "Upload your PDF", description: "The tool reads the page count automatically." },
      { title: "List pages to remove", description: "Use comma-separated numbers and ranges, e.g. \"2, 4-6\"." },
      { title: "Delete & download", description: "Get a new PDF without the pages you removed." },
    ],
    faqs: [
      { question: "Is Delete PDF Pages free to use?", answer: "Yes, Delete PDF Pages is completely free without signup or added branding. File-size, page-count and request limits apply." },
      { question: "Can I delete every page?", answer: "No, at least one page must remain in the document." },
      { question: "Does this work on mobile devices?", answer: "Yes, it works on phones, tablets, and desktop browsers." },
      { question: "How do I remove specific pages from a PDF for free?", answer: "Upload the PDF, type the page numbers you want gone — single numbers or ranges such as \"2, 4-6\" — then download the new PDF built from the remaining pages. No signup is needed, and the work happens in your browser." },
      { question: "Can I delete several pages or a whole range at once?", answer: "Yes. The page list accepts comma-separated numbers and ranges together, for example \"2, 4-6, 9\" removes pages 2, 4, 5, 6 and 9 in one pass. At least one page must remain in the document." },
      { question: "Does deleting pages change my original PDF file?", answer: "No. You download a new PDF that leaves the listed pages out; the original file on your device is untouched, and the pages that remain keep their original order and content." },
    ],
  },
  "rearrange-pdf-pages": {
    aboutText:
      "Rearrange PDF Pages lets you set a new page order for a document and exports a PDF that follows it. It is the quick way to fix a scan whose pages came out in the wrong sequence, or to move an appendix, summary or signed page where it belongs. Everything runs in your browser, so the document is never uploaded.",
    steps: [
      { title: "Upload your PDF", description: "The current page order is pre-filled for you." },
      { title: "Edit the page order", description: "List page numbers in the order you want them to appear." },
      { title: "Apply & download", description: "Get a new PDF with pages arranged the way you specified." },
    ],
    faqs: [
      { question: "Is Rearrange PDF Pages free to use?", answer: "Yes, Rearrange PDF Pages is completely free without signup or added branding. File-size, page-count and request limits apply." },
      { question: "Can I drop a page by leaving it out?", answer: "Yes — any page number left out of the new order is excluded from the result." },
      { question: "Does this work on mobile devices?", answer: "Yes, it works on phones, tablets, and desktop browsers." },
      { question: "How do I change the order of pages in a PDF?", answer: "Upload the PDF and the current page order appears pre-filled in the order box. Rewrite the list so the numbers run in the order you want the pages to appear, then apply and download the rebuilt PDF." },
      { question: "Can I move the last page of a PDF to the front?", answer: "Yes. Move the last page's number to the start of the pre-filled order list, keeping every other page listed after it in the sequence you want, then apply — the downloaded PDF opens with that page first." },
      { question: "Does rearranging pages change the pages themselves?", answer: "No. Only the sequence changes; each page's content, size and quality stay as they were, and your original file is untouched — the new order is saved in the PDF you download." },
    ],
  },
};

import type { PdfToolContent } from "./pdf-tool-content";

/**
 * Tool-specific About / How-to-use / FAQ copy for high-priority non-PDF
 * tools. PDF tools live in pdf-tool-content.ts; the tool page checks
 * that map first, then this one. ToolShell falls back to generic copy
 * when a tool id has no entry in either map, so tools not listed here
 * keep the exact behaviour they had before.
 *
 * Every entry is adapted from that tool's own blog guide (lib/blog/*)
 * and states only what the tool actually does — including honest
 * limits (server tools say so; the background remover is chroma-key,
 * not AI; currency rates are cached, not real-time).
 */
export const toolContent: Record<string, PdfToolContent> = {
  "image-compressor": {
    aboutText:
      "Image Compressor shrinks JPG, PNG and WebP pictures in your browser so they load faster on web pages and send more reliably by email and messaging apps. The output is always saved as a JPEG named 'compressed' plus your original file name, so a PNG with transparency will come out with a solid background — if keeping transparency matters, use a format converter for that picture instead. It is also built for form uploads: exam and job applications, bank KYC and government portals often cap a photo at 100 KB, 50 KB or even 20 KB. Compress here first, check the resulting size, and if the file is still over the limit, reduce its dimensions with Image Resizer and compress again — that two-step route gets most form photos under the cap.",
    steps: [
      { title: "Choose your image", description: "Pick a JPG, PNG or WebP picture from your device. It is read locally and never uploaded." },
      { title: "Let it compress", description: "The tool prepares a smaller JPEG version right in your browser — no server queue, no waiting for an upload." },
      { title: "Check the size and preview", description: "Compare the new file size with the limit your form sets — 100 KB, 50 KB and 20 KB are common caps — and make sure the picture still looks good to you." },
      { title: "Download the JPEG", description: "Save the compressed file and use it for your site, email or upload. Your original stays untouched." },
    ],
    faqs: [
      { question: "Does the Image Compressor reduce image quality?", answer: "Compression discards some image data, so a heavily compressed photo can look slightly softer. For typical web and sharing use the difference is hard to notice, and your original file is never changed, so you can always start again." },
      { question: "What formats can I compress?", answer: "You can compress JPG, PNG and WebP images. Whatever format you start with, the downloaded result is always a JPEG file." },
      { question: "Will my PNG transparency survive compression?", answer: "No. JPEG does not support transparency, so see-through areas in a PNG or WebP are replaced with a solid background in the compressed file." },
      { question: "How do I compress an image to 100 KB for an online form?", answer: "Compress the picture here and compare the new file size — there is no exact-size dial, so checking the result matters. If the JPEG is still over 100 KB, shrink the picture's dimensions with Image Resizer first and then compress it again; smaller dimensions plus compression bring most form photos under the cap." },
      { question: "Can I reduce a photo to 50 KB or 20 KB for an exam or job application?", answer: "Yes, with the same two-step route: reduce the photo's dimensions with Image Resizer, then compress it here and check the size. Very small targets like 20 KB need noticeably smaller dimensions, so start from your original photo each time rather than re-compressing an already compressed copy." },
      { question: "Will a photo compressed for a form still look clear enough?", answer: "For the portrait and document photos forms usually ask for, yes — at sizes around 100 KB they stay clear. Preview the compressed picture at full size before you submit it, and keep your original file untouched in case the form asks for a different size later." },
      { question: "How do I compress a signature image to 10 KB or 20 KB for an application form?", answer: "Signatures are small, detailed images, so start by cropping the scan tightly with Crop Image, then resize it to the dimensions the form asks for and compress here. Check the result before submitting — at 10–20 KB the strokes should stay dark and readable, and if they look faint, begin again from a clearer scan." },
      { question: "My compressed photo is still too big — or the form says it is now too small. What do I do?", answer: "Still too big: shrink the dimensions with Image Resizer and compress again — smaller dimensions are the strongest lever at tiny targets. Too small is the opposite problem: forms sometimes set a minimum size as well as a maximum, and compression only ever makes files smaller, so go back to your original photo and compress it less, or not at all." },    ],
  },
  "image-resizer": {
    aboutText:
      "Image Resizer changes a picture to exact pixel dimensions or scales it by a percentage, right in your browser. It is built for the everyday size jobs — a square profile photo, a wide blog header, a marketplace listing limit — without opening a heavy photo editor for a thirty-second task.",
    steps: [
      { title: "Choose your image", description: "Pick the JPG, PNG or WebP picture you want to change. It stays on your device." },
      { title: "Pick dimensions or percentage", description: "Enter an exact width and height in pixels, or scale the picture to a percentage of its original size." },
      { title: "Check the preview", description: "Confirm the picture still looks the way you expect before saving it." },
      { title: "Download the resized image", description: "Save the new version. Your original is untouched, so you can resize again with different numbers anytime." },
    ],
    faqs: [
      { question: "Should I resize by dimensions or by percentage?", answer: "Use dimensions when a platform or form gives you an exact size in pixels, such as a banner or profile picture. Use percentage when you simply want the same picture smaller or larger, for example halving a photo before emailing it." },
      { question: "Can I resize without distorting the picture?", answer: "Keep the width and height in the same proportion as the original and the picture will not stretch. Dimensions with a different shape reshape the image to fit, so check the preview before downloading." },
      { question: "Will resizing change my image quality?", answer: "Making a picture smaller usually still looks crisp. Enlarging a small picture can make it look softer, because no new detail is created — start from the largest version you have." },
      { question: "Can I resize a photo for Instagram or another social platform?", answer: "Yes. Enter the exact width and height in pixels that the platform asks for — a square post size, for example — or scale the picture by percentage, then check the preview. The tool has no built-in platform presets, so take the numbers from the platform's own guidance." },
      { question: "Can I resize an image for an online form?", answer: "Yes. Forms usually state an exact size in pixels or a maximum dimension. Enter those numbers here, keep the width and height in the same proportion as the original to avoid distortion, and download the resized copy for your upload." },
      { question: "What pixel size do I need for a passport photo?", answer: "It depends on the country and form. The common 3.5 × 4.5 cm passport size (India, Pakistan, the UK and most of Europe) is 413 × 531 pixels at 300 dpi; UK online uploads often ask for 600 × 750, and a US passport or visa photo is square at 600 × 600. There is no built-in passport preset, so type the exact width and height your form states, and crop to the passport shape first with Crop Image if your photo is the wrong shape." },
      { question: "Can I resize an image to a specific file size, like 100 KB?", answer: "Not directly — this tool changes pixel dimensions, not kilobytes. Smaller dimensions do make the file smaller, so resize first, then run the picture through Image Compressor and check the resulting KB against your limit." },    ],
  },
  "heic-to-jpg": {
    aboutText:
      "HEIC to JPG converts iPhone HEIC photos into ordinary JPG files that open on Windows computers, websites and older apps that refuse HEIC. The conversion runs in your browser, so you can convert photos you have already transferred to any computer without installing Apple software.",
    steps: [
      { title: "Choose a HEIC photo", description: "Pick the .heic photo from your device — for example one transferred from an iPhone to a Windows PC." },
      { title: "Start the conversion", description: "The JPG version is prepared locally in your browser; the photo is never uploaded." },
      { title: "Preview the JPG", description: "Confirm the photo looks the way it did on your iPhone." },
      { title: "Download and share", description: "Save the JPG and share, upload or print it anywhere the HEIC file was not accepted. Keep the HEIC original as your master copy." },
    ],
    faqs: [
      { question: "What is HEIC, and why does my iPhone use it?", answer: "HEIC is a modern photo format Apple uses because it stores high-quality pictures in smaller files than JPG. The downside is compatibility: many non-Apple devices, websites and apps still do not support it." },
      { question: "Will converting HEIC to JPG reduce photo quality?", answer: "For everyday sharing, viewing and printing, a converted JPG looks just as good as the original. JPG files are larger than HEIC files, but the visible difference at normal sizes is negligible." },
      { question: "Can I convert HEIC photos on a Windows computer?", answer: "Yes. The tool works in a browser on Windows, Mac or a phone, so you can convert iPhone photos on any computer without installing Apple software." },
      { question: "Why won't my iPhone photos open on my Windows PC?", answer: "Windows and many older programs do not support Apple's HEIC format, so the photos show as unopenable files. Converting them to JPG here gives you copies that open in every Windows program." },
      { question: "An application or job form rejected my HEIC photo — what should I do?", answer: "Convert the photo to JPG and upload the JPG instead. Application portals, employers and government forms overwhelmingly ask for JPG, and the converted copy keeps the photo looking the same." },
      { question: "Can I convert HEIC photos on an Android phone?", answer: "Yes. The converter runs in any modern browser, including on Android, so iPhone photos sent to you can be converted and viewed or shared from an Android phone." },
      { question: "How do I stop my iPhone saving photos as HEIC?", answer: "On the iPhone, open Settings, then Camera, then Formats, and choose Most Compatible — new photos are then saved as JPG instead of HEIC. Photos already saved as HEIC still need converting, which is what this page is for." },    ],
  },
  "background-remover": {
    aboutText:
      "Background Remover clears away a single solid-color background — like a white studio backdrop or a green screen — so the subject can be placed over a new color, slide or design. It is a chroma-key tool, not AI: it separates one even background color, and it cannot cleanly cut a subject out of a busy, patterned or outdoor photo.",
    steps: [
      { title: "Choose a solid-backdrop picture", description: "Pick a JPG or PNG shot against one even color, such as a white backdrop or a green screen." },
      { title: "Start the removal", description: "The tool clears the solid background color locally in your browser." },
      { title: "Check the edges", description: "Preview the cutout and look closely at the edges of your subject." },
      { title: "Download the cutout", description: "Save the result and place it over your new background, slide or design." },
    ],
    faqs: [
      { question: "What kinds of pictures work best with this Background Remover?", answer: "Pictures with a single, even, solid-color background, such as a product on a white backdrop or an object on a green screen. The more uniform the background color, the cleaner the result." },
      { question: "Can it remove the background from any photo, like a portrait outdoors?", answer: "No. This is a chroma-key tool for solid-color backgrounds, not AI segmentation. It cannot reliably separate a person or pet from a busy, varied or patterned background." },
      { question: "Why do the edges look rough on my photo?", answer: "Rough edges usually mean the background was not a single solid color, or that shadows and shading changed the background tone across the picture. A picture shot against a truly even backdrop gives much smoother edges." },
      { question: "Can I make a transparent background for a product photo?", answer: "Yes, when the product was photographed against a single solid backdrop, such as a white studio background. The tool clears that one color, and the downloaded cutout has transparent areas where the background was, ready to place over a new background, slide or shop design." },
      { question: "Can it remove the white background from a logo?", answer: "A logo on a plain white background is one of the best cases for this tool, because the background is a single even color. One caution: if the logo itself contains white areas, those may be cleared along with the background, so check the preview closely before downloading." },
      { question: "Can I use it for a passport-size photo background?", answer: "If the portrait was taken against one plain, even-colored wall or backdrop, the tool can clear that color so the photo can be placed over the plain background your application requires. It cannot clean up a busy room or outdoor background, and dimensions and file size are separate form requirements — adjust those with Image Resizer and Image Compressor if your form sets them." },
      { question: "Can I put the cutout over a new background afterwards?", answer: "Yes. The download has transparent areas where the backdrop was, so you can place the subject over a new colour, slide or design in any editor or presentation tool. The replacing happens wherever you assemble the final picture — this tool's job is the clean cutout." },    ],
  },
  "ai-detector": {
    aboutText:
      "AI Detector estimates whether a piece of text reads like AI output, looking at patterns such as unusually even sentence length and predictable phrasing. It is a quick screening aid that shows where to look more closely — it never proves who or what wrote a text. This is a server tool and needs a configured AI provider on the site; without one it shows an error instead of inventing a score.",
    steps: [
      { title: "Paste the text", description: "Paste the essay, article or post you want to check. Remove private details, such as names or unpublished work, before submitting." },
      { title: "Submit for analysis", description: "Your text is sent to the configured AI provider for the check." },
      { title: "Read the estimate", description: "Review the overall estimate alongside any flagged passages." },
      { title: "Decide what to verify", description: "Compare the result with what you know about the text, and rewrite or verify the passages you are unsure about rather than relying on the score alone." },
    ],
    faqs: [
      { question: "Does the AI Detector prove text was written by AI?", answer: "No. It gives a probabilistic estimate based on writing patterns, not proof. Human writing can resemble AI output, and AI output can be edited to look human, so always combine the result with context and a careful read." },
      { question: "What kinds of text work best with the detector?", answer: "Longer, continuous prose works best, such as essays and articles. Very short texts, lists, heavily quoted passages and technical writing with fixed phrasing can produce less reliable estimates." },
      { question: "Why might I see an error instead of a result?", answer: "The detector needs a configured AI provider on the site. If no provider is enabled, the tool shows an error rather than inventing a score." },
      { question: "Can I check whether a text was written by ChatGPT?", answer: "Yes. Paste the text and the detector estimates whether it reads like AI output, including text produced by ChatGPT-style generators. Treat the result as a screening estimate, not proof — edited AI text and formulaic human writing can both blur the line, so use it to decide what to verify, not as a final verdict on an essay or assignment." },
      { question: "Is the AI Detector free to use with no sign-up?", answer: "Yes. The check is free and needs no account. It runs through the AI provider configured on this site, so if no provider is enabled the tool shows an error instead of a made-up score." },
    ],
  },
  "plagiarism-checker": {
    aboutText:
      "Plagiarism Checker reviews your text against configured similarity sources and highlights passages that closely match existing material, so you can add citations or rewrite before submitting. Without a configured similarity provider (Copyleaks), it shows SIMULATED, clearly labelled results only — a demonstration of the format, not a real check and never proof of originality or copying.",
    steps: [
      { title: "Paste your text", description: "Paste the essay, draft or article you want to review. Avoid sensitive or confidential work — this is a server tool." },
      { title: "Check the result label", description: "Before acting on anything, confirm whether your result is labelled simulated or provider-backed." },
      { title: "Review highlighted passages", description: "Read each match in context and note any source information shown." },
      { title: "Cite or rewrite", description: "Add citations for quoted or closely paraphrased material, and rewrite passages that sit too close to a source in your own words." },
    ],
    faqs: [
      { question: "Is a simulated result a real plagiarism check?", answer: "No. Without a configured similarity provider (Copyleaks), the tool shows simulated, labelled results only. A simulated score does not compare your text against real sources and must never be quoted as proof of originality or copying." },
      { question: "Does a low similarity score guarantee original work?", answer: "No. A low score means little matching text was found in the sources checked, not that every idea is original. Proper citation still matters, and a real check depends on having a similarity provider configured." },
      { question: "What should I do when a passage is flagged?", answer: "Read the passage in context first. If it is a quotation, make sure it is cited correctly. If it is too close to the source, rewrite it in your own words and add a citation where the idea still comes from that source." },
    ],
  },
  "grammar-checker": {
    aboutText:
      "Grammar Checker reviews grammar, punctuation and wording in emails, essays, reports and posts, and suggests cleaner alternatives for problems like subject-verb disagreement, misplaced commas and run-on sentences. Suggestions are a guide, not orders — context, tone and deliberate style are yours to judge. This is a server tool and needs a configured AI provider on the site; without one it shows an error.",
    steps: [
      { title: "Paste your draft", description: "Paste the text you want checked. Remove personal data or confidential information before submitting." },
      { title: "Submit the text", description: "Your text is sent to the configured AI provider for the review." },
      { title: "Work through the suggestions", description: "Accept fixes that improve clarity and reject any that change your intended meaning." },
      { title: "Read it aloud and copy", description: "Read the revised text aloud to catch awkward rhythm, then copy the polished version back into your document." },
    ],
    faqs: [
      { question: "Should I accept every grammar suggestion?", answer: "No. Suggestions can misread context, names, technical terms or deliberate style. Accept changes that clearly improve clarity and keep anything that reflects your intended voice or meaning." },
      { question: "What kinds of writing can I check?", answer: "The checker works well for emails, essays, reports, cover letters, blog drafts and social posts. Very technical or legal writing still needs a human editor, since exact wording can carry important meaning there." },
      { question: "Why do I see an error instead of suggestions?", answer: "The grammar feature needs a configured AI provider on the site. If no provider is enabled, the tool shows an error instead of results." },
    ],
  },
  "paraphrasing-tool": {
    aboutText:
      "Paraphrasing Tool rewrites a sentence or short passage in fresh wording while keeping the original meaning — for clumsy sentences, repeated phrasing, or restating an idea in your own words. Rewording does not remove the need for a citation when the idea comes from a source. This is a server tool and needs a configured AI provider on the site; without one it shows an error.",
    steps: [
      { title: "Paste the passage", description: "Paste the sentence or short passage you want to rewrite. Remove sensitive details before submitting." },
      { title: "Submit for a rewrite", description: "Your text is sent to the configured AI provider, which returns a reworded version." },
      { title: "Compare against the original", description: "Check facts, tone and emphasis line by line — a paraphrase only succeeds if the meaning survives intact." },
      { title: "Refine and cite", description: "Edit the rewrite further in your own words if needed, and add a citation if the idea still comes from another source." },
    ],
    faqs: [
      { question: "Does paraphrasing remove the need for citation?", answer: "No. If the idea comes from another source, it still needs a citation even after rewording. Paraphrasing changes the words, not the ownership of the idea." },
      { question: "How is paraphrasing different from rewriting an article?", answer: "Paraphrasing focuses on short passages and keeps the meaning fairly close to the original. Rewriting a whole article reshapes longer text in a new voice and often reorganizes it." },
      { question: "Why might the tool show an error?", answer: "The paraphrasing feature needs a configured AI provider on the site. If no provider is enabled, it shows an error instead of a rewrite." },
      { question: "Can it paraphrase a paragraph without changing its meaning?", answer: "That is exactly what it is for: paste a sentence or short passage from an essay, assignment or email and it returns fresh wording with the same meaning. Always compare the rewrite against the original before using it, because a successful paraphrase keeps the facts, tone and emphasis intact." },
      { question: "Does paraphrasing a source help me avoid plagiarism?", answer: "Rewording alone does not make someone else's ideas yours, and it should not be used to disguise copied work. Use the tool to restate ideas you understand in your own words, restructure the passage yourself, and still cite the source — a citation is needed whenever the idea comes from somewhere else." },
    ],
  },
  "ai-summarizer": {
    aboutText:
      "AI Summarizer turns long articles, reports and transcripts into a concise summary of the key points, so you can grasp a document quickly and decide what deserves a full read. Summaries compress and simplify — they can omit caveats, numbers and conditions that matter — so check the original before quoting or acting on one. This is a server tool and needs a configured AI provider on the site; without one it shows an error.",
    steps: [
      { title: "Paste the long text", description: "Paste the article, report or transcript you want condensed. Remove private or confidential material first." },
      { title: "Submit for a summary", description: "Your text is sent to the configured AI provider, which extracts the key points." },
      { title: "Read and compare", description: "Compare the summary's key points with the original document, noting anything important it left out." },
      { title: "Use it as a briefing", description: "Use the summary for notes and triage, and return to the original for quotations and decisions." },
    ],
    faqs: [
      { question: "Can I trust a summary for important decisions?", answer: "Use it as a starting point, not the final word. Summaries can omit caveats and numbers, so read the original document before making decisions, quoting figures or citing claims." },
      { question: "What kinds of text summarize well?", answer: "Articles, reports, essays and transcripts with a clear structure summarize best. Highly technical, legal or fragmented text may lose important precision when compressed." },
      { question: "Why does the summarizer show an error?", answer: "The summarizer needs a configured AI provider on the site. If no provider is enabled, it shows an error instead of a summary." },
    ],
  },
  "ai-humanizer": {
    aboutText:
      "AI Humanizer reworks a stiff, generated-sounding draft toward natural writing — varied sentence lengths, simpler connectors, a less mechanical tone — so your own draft reads like a person wrote it. Use it as a polishing step and then add your own edits and details; it does not make false claims true. This is a server tool and needs a configured AI provider on the site; without one it shows an error.",
    steps: [
      { title: "Paste your draft", description: "Paste the generated text you want to make more natural. Remove sensitive information before submitting." },
      { title: "Submit the text", description: "Your text is sent to the configured AI provider for the rewrite." },
      { title: "Read it aloud", description: "Check whether the new version sounds natural, and fix any sentence where the meaning changed." },
      { title: "Make it genuinely yours", description: "Add your own examples, opinions and details, and confirm every claim is accurate before using the text." },
    ],
    faqs: [
      { question: "Does humanizing text make it undetectable as AI writing?", answer: "Not reliably, and that should not be the goal. Use the humanizer to polish your own draft and improve readability, not to hide authorship or evade a review process that requires disclosure." },
      { question: "Will the humanizer change my meaning?", answer: "It can, which is why you must review the output carefully. Check facts, emphasis and tone, and correct any sentence that no longer says what you intended." },
      { question: "Why do I see an error instead of a result?", answer: "The humanizer needs a configured AI provider on the site. If no provider is enabled, it shows an error rather than a rewritten text." },
      { question: "Can I humanize ChatGPT text for free?", answer: "Yes. Paste the draft you generated with ChatGPT or a similar tool and the humanizer reworks it toward natural, human-sounding writing at no cost and with no sign-up. Add your own examples, opinions and details afterwards so the text is genuinely yours." },
      { question: "How does the humanizer make AI text sound more natural?", answer: "It varies sentence lengths, swaps stiff connectors for simpler ones and loosens the mechanical rhythm that makes generated text easy to spot. Read the result aloud afterwards — if a sentence sounds off or the meaning has shifted, fix it before you use the text." },
    ],
  },
  "word-counter": {
    aboutText:
      "Word Counter counts the words and characters in your text and estimates its reading time, updating live as you type or paste. It is made for working to a limit: an assignment's word count, a post's character limit, or a speech that must run about five minutes. It runs entirely in your browser, so unpublished drafts, essays and personal writing never leave your device.",
    steps: [
      { title: "Paste or type your text", description: "Add the essay, post or application text you want to measure." },
      { title: "Read the live counts", description: "See the word count and character count update as you edit." },
      { title: "Check the reading time", description: "Use the estimate to judge whether the text is the right length for its audience." },
      { title: "Edit to your target", description: "Trim or expand until the counts fit your limit, then copy the final text." },
    ],
    faqs: [
      { question: "What does the Word Counter measure?", answer: "It counts words and characters in your text and gives an estimated reading time — the three numbers most writers check before submitting or publishing." },
      { question: "Does the word count update as I type?", answer: "Yes. The counts refresh as you edit, so you can see immediately whether you are under, over or right on your target length." },
      { question: "Is the reading time estimate exact?", answer: "It is an estimate based on an average reading speed, so treat it as a guide. Individual readers will be faster or slower, but it is useful for comparing drafts." },
      { question: "How many words should a 5-minute speech be?", answer: "Roughly 600 to 750 words, because most people speak at about 120 to 150 words per minute. It is only a guide — a fast speaker covers more ground than a slow one — so paste your draft here, read the live count and the reading-time estimate, and trim or expand until it fits your slot." },
      { question: "What is the difference between a word count and a character count?", answer: "A word count measures how many words you wrote; a character count measures every letter, space and punctuation mark. Essays and assignments usually set a word limit, while bios, captions and form fields set a character limit — so check whichever number your limit actually uses." },
      { question: "Can I use the Word Counter for an assignment word limit?", answer: "Yes, that is one of its main uses. Paste your essay, watch the live count as you edit, and trim or expand until you land on your target. Keep a small margin under a strict limit, since different counters can disagree by a word or two on hyphenated words and numbers." },
      { question: "Is my essay or draft uploaded anywhere?", answer: "No. The counter runs entirely in your browser, so unpublished drafts, essays and personal writing never leave your device. You can check a private document without sending it to any server." },
    ],
  },
  "json-formatter": {
    aboutText:
      "JSON Formatter rewrites compact, single-line JSON with consistent indentation and line breaks, so nested objects and arrays are easy to scan and debug. Formatting changes only whitespace — keys, values and structure stay exactly the same. It runs entirely in your browser, so API responses and configuration files are safe to paste.",
    steps: [
      { title: "Paste your JSON", description: "Paste the JSON into the input box, or type a short snippet directly." },
      { title: "Run the formatter", description: "The JSON is rewritten with standard indentation, one value per line where appropriate." },
      { title: "Scan or fix", description: "Follow the indentation through nested levels. If an error appears instead of output, the message points at the problem spot — fix the input and format again." },
      { title: "Copy the result", description: "Paste the formatted JSON into your editor, API client or documentation." },
    ],
    faqs: [
      { question: "What does a JSON formatter do?", answer: "It rewrites JSON with consistent indentation and line breaks so the structure is easy to read. It does not change any keys, values or data types — only how the JSON is presented." },
      { question: "Is formatting the same as validating JSON?", answer: "Not quite. Formatting makes valid JSON readable, but if your JSON has a syntax error the formatter cannot produce output until the error is fixed. A validator focuses on finding and describing those errors in detail." },
      { question: "Will formatting change my data?", answer: "No. Formatting only adjusts whitespace — spaces, line breaks and indentation. The underlying data stays identical, so formatted JSON works exactly like the original in any application." },
      { question: "Can I format and validate JSON in one click?", answer: "Effectively, yes. Paste your JSON and run the formatter: valid JSON comes back beautified with proper indentation, and if there is a syntax error no output is produced and the message points at the problem spot — so a failed format is itself a quick validity check." },
      { question: "Is it safe to paste JSON that contains API keys or tokens?", answer: "Yes. The formatter runs entirely in your browser and never uploads your data, so API responses, configuration files and payloads containing keys or tokens stay on your device." },
    ],
  },
  "password-generator": {
    aboutText:
      "Password Generator creates strong, random passwords in your browser — a fresh one for every account, instead of a reused name, pet or birthday that attackers try first. Passwords are generated locally on your device and never sent anywhere; copy the result into the signup form and save it in a password manager you trust.",
    steps: [
      { title: "Open the generator", description: "It works in any browser, on desktop or mobile, with no account or install." },
      { title: "Generate a password", description: "Create a new random password suited to the account you are setting up — longer for important accounts like email and banking." },
      { title: "Regenerate until it fits", description: "If the password does not suit the site's rules, generate another one." },
      { title: "Copy and save it safely", description: "Paste it into the account form, then store it in a password manager — not on paper or in an unprotected note." },
    ],
    faqs: [
      { question: "How long should a generated password be?", answer: "Longer is generally better, especially for email, banking and other important accounts. Aim for a password that is long enough to be hard to guess, and store it in a password manager so you do not have to memorize it." },
      { question: "Should I use the same generated password everywhere?", answer: "No. Use a different password for each account. That way, if one service suffers a data breach, an attacker cannot use the same password to get into your other accounts." },
      { question: "Is a random password better than a memorable phrase?", answer: "A truly random password is harder to guess systematically than a phrase built from common words. If you prefer a phrase, make it long and unusual, and still avoid reusing it across sites." },
    ],
  },
  "currency-converter": {
    aboutText:
      "Currency Converter turns an amount in one currency into its equivalent in another using cached live rates — a quick reference for travel budgets, overseas shopping and cross-border quotes. Cached rates are not real-time trading rates, and banks and exchange services add their own fees and margins, so confirm the final rate with your provider before committing money.",
    steps: [
      { title: "Enter the amount", description: "Type the amount you want to convert." },
      { title: "Choose the currencies", description: "Pick the currency you are converting from and the one you want to convert to." },
      { title: "Read the conversion", description: "See the equivalent amount based on the cached live rate shown." },
      { title: "Compare before you commit", description: "Try other amounts or pairs to compare options, then confirm the final rate and fees with your provider." },
    ],
    faqs: [
      { question: "Are the rates real-time trading rates?", answer: "No. The converter uses cached live rates, which are suitable for planning and comparison. Banks and exchange services apply their own rates, fees and timing, so the amount you receive may differ from the converted figure." },
      { question: "Why does my bank show a different amount?", answer: "Banks and card providers add a margin or fee to the market rate and may process the transaction at a different time. The converter shows a reference conversion, while your provider shows the final amount after its own charges." },
      { question: "Do I need an account to convert currency?", answer: "No. The tool is free and works without signup. Enter an amount, choose your currencies and read the result." },
      { question: "How much is 100 US dollars in Pakistani rupees?", answer: "Enter 100, choose USD as the currency you are converting from and PKR as the target, and the tool shows the equivalent using its cached rate. Do not treat the figure as a final price — confirm the rate and any fees with your bank or exchange service before committing money, since providers add their own margins." },
      { question: "Why do exchange rates change every day?", answer: "Because currencies are traded constantly, and their prices move with interest rates, trade, inflation and market sentiment. This tool uses cached rates as a planning reference, so the figure is a snapshot — always confirm the current rate with your provider for a real transaction." },
      { question: "Does the converted amount include transfer fees?", answer: "No. The tool shows a reference conversion based on the cached rate, before any charges. Banks, card providers and money transfer services add their own fees and margins on top, so the amount you actually receive will be lower than the converted figure." },
      { question: "Can I use the Currency Converter to plan a travel budget?", answer: "Yes, travel budgets are one of its main uses. Convert your daily spending estimate into the local currency to see what things will cost, try a few amounts to compare options, and keep a margin for the provider's rate and fees when you exchange or pay by card." },
    ],
  },
  "emi-calculator": {
    aboutText:
      "EMI Calculator works out the equated monthly instalment for a loan from the amount, the annual interest rate and the term — and shows the trade-off clearly: a longer term lowers the monthly payment but increases the total interest paid. The figures are estimates for planning, not a loan offer or financial advice; the lender's fees and exact terms decide the real instalment. Everything runs in your browser, so your loan figures never leave your device.",
    steps: [
      { title: "Enter the loan amount", description: "Type the amount you are considering borrowing." },
      { title: "Enter the interest rate", description: "Use the annual rate quoted by the lender." },
      { title: "Enter the loan term", description: "Add the term in months or years, as the tool asks." },
      { title: "Compare against your budget", description: "Read the monthly instalment, then try a shorter or longer term to see the payment and total interest move before you approach a lender." },
    ],
    faqs: [
      { question: "What is an EMI?", answer: "An equated monthly instalment is a fixed monthly payment that covers both the principal you borrowed and the interest on it, so the amount stays the same each month for the life of the loan." },
      { question: "Why does a longer loan term mean more total interest?", answer: "Because you are borrowing the money for longer, interest accrues over more months. The monthly payment drops, but the sum of all payments — and therefore the interest portion — goes up." },
      { question: "Does the result include lender fees?", answer: "No. The calculation covers principal and interest only. Processing fees, insurance and other charges are set by the lender and add to the real cost, so ask for the full schedule before signing." },
      { question: "Can I use this as a home loan EMI calculator with total interest?", answer: "Yes. Enter the home loan amount, the annual interest rate and the term, and alongside the monthly EMI you can compare terms to see how the total interest changes — a shorter term raises the monthly payment but cuts the total interest substantially." },
      { question: "Can it calculate a car loan EMI per month?", answer: "Yes. The same calculation works for car loans and personal loans: enter the amount you plan to borrow, the lender's annual rate and the repayment term to get the monthly instalment." },
      { question: "How is EMI calculated — what is the formula?", answer: "EMI = P × r × (1 + r)^n ÷ ((1 + r)^n − 1), where P is the loan amount, r is the monthly interest rate (the annual rate divided by 12, then by 100) and n is the number of monthly payments. For example, a loan of 100,000 at 12% a year over 12 months gives r = 0.01 and n = 12, so the EMI works out to about 8,885 a month in the loan's currency." },
      { question: "What is the difference between reducing-balance and flat-rate interest?", answer: "On a reducing balance, interest is charged only on the amount you still owe, so it falls as you repay. On a flat rate, interest is charged on the full original amount for the whole term, even on money you repaid years ago — so a flat rate that looks lower can cost far more. Banks quote reducing-balance rates for regulated loans; always ask a dealer or finance desk which basis their rate uses before comparing." },
      { question: "Does this tool show what happens if I prepay part of the loan?", answer: "Not directly — it calculates the standard schedule for the amount, rate and term you enter. The principle is simple: any extra payment comes straight off the outstanding balance, so every later month is charged less interest and the loan ends sooner. Prepaying early saves the most, because in the first years most of each EMI is interest. Ask your lender whether prepayment carries a charge and whether it cuts the tenure or the EMI — cutting the tenure saves more interest." },
    ],
  },
  "loan-calculator": {
    aboutText:
      "Loan Calculator shows the full picture of a loan — the regular payment plus the total interest and the total you repay by the end of the term — so offers can be compared on total cost, not just on whether the monthly figure fits. The results are estimates for planning, not a quote or financial advice, and they exclude lender fees. Everything runs in your browser, so your loan details never leave your device.",
    steps: [
      { title: "Enter the loan amount", description: "Type the amount you want to estimate." },
      { title: "Enter rate and term", description: "Add the interest rate you have been quoted and the term you are considering." },
      { title: "Read payment and totals", description: "See the regular payment alongside the total interest and total repayment." },
      { title: "Compare scenarios", description: "Adjust the amount, rate or term and recalculate to shortlist the option that balances an affordable payment with acceptable total interest." },
    ],
    faqs: [
      { question: "How is the Loan Calculator different from the EMI Calculator?", answer: "The EMI Calculator centres on the fixed monthly instalment. The Loan Calculator adds the wider view: the payment plus the total interest and total repayment, which is what you need when comparing whole loans rather than just monthly affordability." },
      { question: "Why is total interest important if the monthly payment fits my budget?", answer: "Because two loans with similar payments can cost very different amounts overall. A longer term lowers the payment but stretches interest over more months, so the total repaid can be much higher." },
      { question: "Does the estimate include fees and charges?", answer: "No. It covers the loan amount and interest. Origination fees, late charges and insurance are lender-specific and are not included, so ask for an all-in figure before deciding." },
      { question: "Should I compare loans by the interest rate or by the total repayment?", answer: "By the total repayment — and by the APR if the lender quotes one, because APR folds in fees the headline rate leaves out. Two loans with the same monthly payment can cost very different amounts overall if their terms differ, so use this tool to compare the total interest and total repaid side by side, then ask each lender for the all-in figure including fees." },
      { question: "What is the difference between a fixed and a floating interest rate?", answer: "A fixed rate stays the same for the whole term, so your payment never changes. A floating rate moves with the lender's benchmark, so the payment can rise or fall. Floating rates often start lower; fixed rates give certainty. This tool calculates with the single rate you enter, so if your rate is floating, treat the result as an estimate at today's rate." },
      { question: "Can I use this to check a loan I already have?", answer: "Yes. Enter the amount still outstanding as the loan amount, your current rate and the months left, and the tool estimates the remaining payments and interest. It is a planning estimate — your lender's statement is the authoritative figure, especially if fees or a rate change apply." },
      { question: "Does a longer term always mean a smaller payment?", answer: "Yes, stretching the term lowers the regular payment, but it raises the total interest substantially because you borrow for longer. Before choosing the longest term, compare the total repaid at two terms in this tool — the difference is often much larger than the monthly saving suggests." },
    ],
  },
  "mortgage-calculator": {
    aboutText:
      "Mortgage Calculator estimates the monthly payment and lifetime totals for a home loan from the home price, your down payment, the interest rate and the term — the figures that decide what house you can afford. The calculation covers principal and interest only: property taxes, insurance and lender fees are extra, and the result is an estimate for planning, not a mortgage offer or financial advice. Everything runs in your browser, so your figures never leave your device.",
    steps: [
      { title: "Enter the home price", description: "Type the price of the home you are considering." },
      { title: "Enter your down payment", description: "The tool works out the amount you need to borrow from price minus deposit." },
      { title: "Enter rate and term", description: "Add the interest rate you have been quoted and a term such as 20, 25 or 30 years." },
      { title: "Test the trade-offs", description: "Read the monthly payment and totals, then try a bigger down payment or a different term to see how both move." },
    ],
    faqs: [
      { question: "Does the result include property taxes and insurance?", answer: "No. The calculation covers the loan itself: principal and interest. Taxes, insurance and other housing costs vary by location and lender, so add your own estimates for those to get the full monthly housing cost." },
      { question: "How does a bigger down payment help?", answer: "It reduces the amount borrowed, which lowers both the monthly payment and the total interest. It can also affect whether you need mortgage insurance and the rate a lender offers." },
      { question: "How is a mortgage payment different from a regular loan payment?", answer: "The core maths is the same — principal and interest spread over a term — but a mortgage is secured on a home, usually runs for decades, and starts from a price minus a down payment. Real monthly housing costs may also include taxes and insurance on top of the loan payment." },
      { question: "Is a 15-year or a 30-year mortgage better?", answer: "A 15-year term usually carries a slightly lower rate and cuts lifetime interest roughly in half, but the monthly payment is much higher and fixed by contract. A 30-year term keeps the required payment lower and flexible — many borrowers take the 30-year term and pay extra when they can, which mimics the 15-year saving while keeping the right to fall back to the lower payment. Run both terms here and compare the total interest before deciding." },
      { question: "What is PMI and when do I pay it?", answer: "Private mortgage insurance protects the lender, not you, and is usually required when your down payment is under 20% of the home price — typically around 0.3% to 1.5% of the loan per year. This tool's result covers principal and interest only, so PMI is not in the figure; add your lender's PMI estimate on top. PMI usually ends once your balance falls to 80% of the home's value." },
      { question: "Can I see what extra monthly payments would save?", answer: "Not directly — this tool calculates the standard schedule for the price, down payment, rate and term you enter. The principle is that every extra payment comes straight off the balance, so all future interest on that amount disappears. As a rough proxy, run a shorter term here: the interest difference shows the scale of the saving, then confirm the exact figures with your lender." },
      { question: "How much house can I afford?", answer: "Lenders commonly look for the monthly housing payment to stay within roughly a quarter to a third of your gross monthly income, on top of your other debts. Enter a home price here, read the monthly payment, and work backwards: lower the price or raise the down payment until the payment fits comfortably — and remember taxes, insurance and upkeep sit on top of the loan payment shown here." },
    ],
  },
  "qr-code-generator": {
    aboutText:
      "QR Code Generator turns a link or a short piece of text into a scannable QR code in your browser — for menus, event flyers, business cards, product packaging and sharing Wi-Fi details. It is generated on your device, with no account and no expiry games: test the finished code with your own phone before you print it, and keep the encoded text short and typo-free, because a code is only as useful as the destination behind it.",
    steps: [
      { title: "Enter your text or link", description: "Type or paste what the code should contain, and double-check it for typos." },
      { title: "Generate the code", description: "The QR code is created in your browser from your input." },
      { title: "Scan-test it yourself", description: "Point your phone camera at the code and confirm it opens the right link or shows the right text." },
      { title: "Print or share it", description: "Use the code on a flyer, poster, card or message — printed large and sharp enough for a phone to read at a normal distance." },
    ],
    faqs: [
      { question: "What can I put in a QR code?", answer: "You can encode text and links, along with other short pieces of information the tool supports. Short, accurate input works best, because a code holding a long address becomes dense and harder for cameras to read." },
      { question: "How do I know my QR code works?", answer: "Scan it with your own phone before you print or share it. Check that it opens the correct page or shows the correct text, and test it at the size you plan to use in print." },
      { question: "Can I print the QR code on a flyer or poster?", answer: "Yes. QR codes are made for print as well as screens. Keep the code sharp, leave some clear space around it, and print it large enough that a phone can scan it without the user having to stand very close." },
    ],
  },
  "barcode-generator": {
    aboutText:
      "Barcode Generator turns a value into a scannable barcode image, free in your browser: for product labels, inventory tags, event tickets, asset tracking or a quick label for a box in storage. The value is encoded into a pattern of bars and spaces a scanner reads back instantly, so the printed label has to be crisp and large enough for the bars to be distinct — blurry, tiny or low-contrast printing is the usual reason a barcode will not scan. Keep its acceptance rules in mind: a barcode made here labels your products, but selling through major retailers needs an officially registered product code — this tool does not issue one. Download the image and test it with a scanner app before mass-printing.",
    steps: [
      { title: "Enter the value", description: "Type the number or text you want encoded — the product code, reference or identifier. It never leaves your device." },
      { title: "Adjust the appearance", description: "Set the bar height, width and layout so the printed barcode will be clear and easy to scan." },
      { title: "Download the image", description: "Save the barcode in a high-quality format (PNG or SVG) so the bars stay sharp in print." },
      { title: "Print and test", description: "Keep enough clear margin around it, print at a sensible size, and scan it with a phone app to confirm it reads correctly before mass-printing labels." },
    ],
    faqs: [
      { question: "Can I use these barcodes to sell products in shops?", answer: "You can label products with them, but selling through major retailers usually requires an officially registered product code, and this tool does not issue one. For internal use — inventory, assets, storage — a self-made barcode is fine." },
      { question: "Why will my barcode not scan?", answer: "The usual causes are printing too small, low contrast, or a blurred printout. Generate the barcode at a higher resolution, print it with enough clear margin around it, and test it with a scanner app before mass-printing labels." },
      { question: "Which image format should I download?", answer: "PNG or SVG keeps the bars crisp for labels and documents. SVG stays sharp at any size, which suits professional printing, while PNG is a safe general choice." },
    ],
  },
  "color-picker": {
    aboutText:
      "Color Picker lets you choose a color visually and see its values, so a designer, developer or anyone choosing a paint or brand color can work with the exact shade rather than a guess. Its real advantage is precision: 'dark blue' means something different to everyone, while a hex value names exactly one color. Names are approximations, and warm greys in particular look very different across screens, so keep working with the value the picker gives you. And because screens vary, test an important color on more than one display before finalizing it. It runs in your browser; your colors never leave your device.",
    steps: [
      { title: "Pick a color", description: "Open the picker and choose a color by sight, moving across the palette until the shade looks right. Nothing is stored or sent anywhere." },
      { title: "Fine-tune it", description: "Nudge the shade until it matches the color you had in mind — or the swatch you are matching." },
      { title: "Read the values", description: "Note the values shown for the color you picked, so it can be reproduced exactly anywhere." },
      { title: "Use and test", description: "Use the values in your design, code or order — and for important colors, test on a second display first, since screens render shades slightly differently." },
    ],
    faqs: [
      { question: "Why use a color picker instead of a color name?", answer: "Names are approximations: 'dark blue' means something different to everyone. A picked color is precise, so anyone using the same value gets exactly the same shade." },
      { question: "Why does my color look different on another screen?", answer: "Displays vary in brightness, calibration and color handling, so the same color can render slightly differently. For important brand or print work, test the color on more than one display before finalizing it." },
      { question: "Can I match a color I have already seen?", answer: "Yes. Adjust the picker until the shade on screen matches your reference as closely as possible, then use the values shown to reproduce it. A reference image or swatch beside the picker makes matching easier." },
    ],
  },
  "color-converter": {
    aboutText:
      "Color Converter turns a color from one format into the others, so the same shade can move between a design tool, a stylesheet and a graphics program without changing. Web work usually runs on hex values, design tools often present RGB or HSL, and print thinks in CMYK — the converter handles the arithmetic and keeps values in their valid ranges (hex digits run 0-9 and A-F; an invalid character means a mistyped value). Converting to CMYK gives an approximation for screen-to-print planning — for exact print matching, check a printed proof, since screens and inks differ. Some transparency information does not carry between formats, so check the converted color visually. It runs in your browser; your colors never leave your device.",
    steps: [
      { title: "Enter your color", description: "Type the color value you have, in its current format. Nothing is stored or sent anywhere." },
      { title: "Choose the target format", description: "Pick the format you need — for example, hex for a stylesheet or CMYK for print planning." },
      { title: "Read the converted values", description: "Copy the values in the format you asked for, keeping an eye on any transparency that may not have carried across." },
      { title: "Check visually, proof for print", description: "Compare the converted color against the original on screen — and for print work, check a printed proof before committing." },
    ],
    faqs: [
      { question: "What is the difference between RGB and hex?", answer: "Nothing in the color itself. Hex is a compact way of writing the same red, green and blue values as a single code, which is why stylesheets use it. The converter translates between the two without changing the color." },
      { question: "Is a converted CMYK value exact for printing?", answer: "It is an approximation suitable for planning and mock-ups. Because screens and inks produce color differently, check a printed proof for exact print matching rather than trusting the screen value alone." },
      { question: "Why does my converted color look slightly different?", answer: "Small differences can appear when a color sits at the edge of what a screen or print process can reproduce, or when transparency information does not carry between formats. Checking the converted color visually catches the cases that matter." },
    ],
  },
  "random-number-generator": {
    aboutText:
      "Random Number Generator picks numbers inside a range you set: raffles and giveaway winners, classroom questions, game nights, test data or settling who goes first. Because it runs on your device, the draw is as fair as your rules — enter the range carefully, since a mistyped minimum or maximum quietly changes the odds. One warning that matters in any language: never use a tool like this for passwords, PINs or anything security-related — use the password tools instead, which are built for that. Agree in advance how duplicates and redraws will be handled so nobody disputes the result. It runs in your browser; your ranges never leave your device.",
    steps: [
      { title: "Set the range", description: "Choose the minimum and maximum numbers for your draw — and double-check them, since a mistyped bound quietly changes the odds." },
      { title: "Choose how many numbers", description: "Pick how many numbers you want drawn in one go." },
      { title: "Generate", description: "Draw the numbers — agree in advance how duplicates and redraws are handled, so nobody disputes the result." },
      { title: "Use the result", description: "Announce or record the winning number, answers or order — and generate again whenever a fresh draw is needed." },
    ],
    faqs: [
      { question: "Can numbers repeat in one draw?", answer: "A random draw can produce the same number twice unless duplicates are excluded. If you are drawing several unique winners, generate one at a time and set drawn numbers aside, or check the results for repeats before announcing them." },
      { question: "Can I use this for passwords or PINs?", answer: "No. A general random number tool is not designed for security. Use this site's password generator instead, which is built to produce strong credentials." },
      { question: "How large a range can I use?", answer: "Enter the minimum and maximum your draw needs, from a handful of entrants to a large raffle range. The key is matching the range exactly to your list, so every entry has the same chance." },
    ],
  },
  "random-password-generator": {
    aboutText:
      "Random Password Generator exists so you never have to invent a password under pressure: names, birthdays and reused favorites are exactly what attackers try first, so a genuinely random password — long, and mixing upper and lower case, digits and symbols — is far harder to guess or crack. It complements AleTool's main Password Generator: use this one for quick, strong one-off passwords, and the main generator when you want more control over length and character sets. Each spin differs from the last, so reuse across accounts is the trap to avoid — one breach should never unlock your other accounts. Everything runs in your browser; generated passwords are never sent or stored. Copy each password straight into your password manager rather than writing it on paper or in a note.",
    steps: [
      { title: "Set the length", description: "Make the password long — length does most of the defensive work. Nothing is stored or sent anywhere." },
      { title: "Choose the character mix", description: "Include symbols if the site allows them; the broader the mix, the harder the password is to crack." },
      { title: "Generate", description: "Create the password and spin again if you want a fresh one." },
      { title: "Save it in a password manager", description: "Copy it straight into your password manager, use a different password for every account, and never reuse one across accounts." },
    ],
    faqs: [
      { question: "What makes a password strong?", answer: "Length first, then variety. A long password mixing upper and lower case letters, digits and symbols is far harder to guess or brute-force than a short, clever one based on personal details." },
      { question: "How is this different from the Password Generator?", answer: "Both create random passwords in your browser. This tool is the quick option for one-off passwords; the main Password Generator offers more control over length and character sets when you need it." },
      { question: "Are the passwords stored anywhere?", answer: "No. Generation happens in your browser on your device. Nothing you generate is sent to a server or kept after you leave the page, which is why saving the password in your password manager matters." },
    ],
  },
  "timestamp-converter": {
    aboutText:
      "Timestamp Converter translates Unix timestamps into readable dates and times, and ordinary dates back into timestamps — the two forms are the same moment, one written for machines and one for people, and software shows whichever form you did not want. Unix timestamps count seconds since 1 January 1970 (UTC), which is why so many of them are ten-digit numbers starting with 1. The trap to know: some systems work in milliseconds — thirteen digits — and entering a millisecond value as seconds gives a date thousands of years away. If a converted date looks absurd, check the units and whether the value should be read in UTC or your local zone. It runs in your browser; your values never leave your device.",
    steps: [
      { title: "Enter the timestamp or date", description: "Type the Unix timestamp you want to decode, or the date you want to convert. Nothing is stored or sent anywhere." },
      { title: "Check the units", description: "Confirm whether the timestamp is in seconds or milliseconds — a millisecond value treated as seconds lands thousands of years away." },
      { title: "Convert", description: "Run the conversion to the readable date and time, or back to a timestamp." },
      { title: "Sanity-check the result", description: "If the date looks absurd, check the units and the timezone; then use the result in your log analysis, debugging or report." },
    ],
    faqs: [
      { question: "What is a Unix timestamp?", answer: "It is the number of seconds since midnight UTC on 1 January 1970. Computers use it because a single number is easy to store, sort and compare, and converting it gives you the human-readable date." },
      { question: "Why is my converted date thousands of years in the future?", answer: "Almost certainly a units mix-up. Some systems record milliseconds, which have thirteen digits, while seconds have ten. Entering a millisecond value where seconds are expected multiplies the time by a thousand." },
      { question: "Does the timezone matter?", answer: "Yes. A timestamp marks one exact moment, but the clock time shown for it depends on the timezone you view it in. Check whether a result is shown in UTC or your local time before comparing it with other records." },
    ],
  },
  "stopwatch": {
    aboutText:
      "Stopwatch measures elapsed time with a start, pause and reset: track a workout interval, time a presentation rehearsal, run a classroom activity or check how long a task actually takes. The count keeps running while the page stays open — but it is a practical timer, not certified timing equipment, so for formal or competitive timing use the official equipment your event requires. For anything crucial, run a second timer alongside as a backup: a refreshed or closed page can lose the current count. Your timings are processed on your device and never leave it, and the stopwatch also works on a phone browser at the track or in the gym.",
    steps: [
      { title: "Start the stopwatch", description: "Begin timing when your activity starts. Nothing is stored or sent anywhere." },
      { title: "Pause when needed", description: "Pause for a break or an interruption, then resume when you are ready." },
      { title: "Stop and read", description: "Stop the stopwatch at the end and read the total elapsed time; note down any time you need to keep." },
      { title: "Reset", description: "Reset to zero and start again for the next activity or attempt." },
    ],
    faqs: [
      { question: "Does the stopwatch keep running if I switch tabs?", answer: "The stopwatch keeps counting while the page stays open in your browser, including when you look at another tab. If the page is closed or the browser is shut down, the current timing is lost, so note important times down as you go." },
      { question: "Can I use it for official race timing?", answer: "It is a practical browser timer for training, rehearsals and everyday tasks. Formal or competitive events should use their official timing equipment, which is calibrated and recorded for results." },
      { question: "Is there a lap or split feature?", answer: "For most everyday uses, pause and note the time at each stage you care about. If you need detailed splits for training, note each reading as you pass it so the figures are saved outside the page." },
    ],
  },
  "timer": {
    aboutText:
      "Timer counts down from a duration you set and tells you when the time is up: cooking, focused work sessions, exercise intervals, exam practice or a parking meter. Keep the tab open and the device's sound on — a muted or sleeping device can leave you unaware the countdown finished, and a closed tab stops the alert. A countdown also beats a clock alarm for short tasks, because it targets an exact duration rather than surprising you at a fixed hour. For anything important like medication, use a dedicated alarm as a backup rather than relying on one browser tab. Your settings are processed on your device and never leave it.",
    steps: [
      { title: "Set the duration", description: "Enter the length of time you want to count down — minutes for a quick task, longer for a work session. Nothing is stored or sent anywhere." },
      { title: "Start the countdown", description: "Start the timer and leave the tab open." },
      { title: "Check the time left", description: "Glance at the remaining time whenever you need to, and pause if something interrupts you." },
      { title: "Wait for the alert", description: "When the countdown finishes, stop or reset — and set a fresh duration if another interval is needed." },
    ],
    faqs: [
      { question: "Will the timer alert me if I switch tabs?", answer: "The timer keeps counting while the tab stays open, and alerts when the time is up. It cannot notify you if the tab is closed or the device is asleep with sound off, so keep the tab open and the sound on for anything important." },
      { question: "How long a countdown can I set?", answer: "Any duration your task needs, from a minute for eggs to hours for a slow-cooking dish or a long study session. Enter the duration, start the countdown, and the timer tracks the rest." },
      { question: "Can I run more than one timer?", answer: "Open the Timer tool in another tab to run a second countdown alongside the first. Label your tasks as you go, since each tab counts down independently." },
    ],
  },
  "age-calculator": {
    aboutText:
      "Age Calculator works out exactly how old you are in years, months and days from your date of birth, taking leap years and the different lengths of calendar months into account — the arithmetic that is easy to get wrong by hand. Use it for forms that ask for an exact age, to check an age cutoff for school, sport, driving or retirement, or to compare two people's ages precisely. It gives your age as of today, so for a past or future date adjust from the breakdown shown. It runs entirely in your browser; your date of birth never leaves your device.",
    steps: [
      { title: "Enter your date of birth", description: "Type the day, month and year you were born — and check it carefully, since one wrong digit changes the result." },
      { title: "Calculate", description: "Submit the date to calculate your age as of today." },
      { title: "Read the breakdown", description: "Your age is shown in years, months and days." },
      { title: "Use it", description: "Put the result on a form or use it in planning — and try another date of birth if you want to compare ages." },
    ],
    faqs: [
      { question: "How is my age in months and days calculated?", answer: "The tool counts the full years, then the full months, then the remaining days between your date of birth and today, taking leap years and the different lengths of calendar months into account." },
      { question: "Is the result my age today or on a different date?", answer: "It gives your age as of today. If you need your age on a past or future date, such as an application deadline, work from the years, months and days shown and adjust from there." },
      { question: "Why does my age differ from a simple division?", answer: "Dividing your total days by 30 or 365 gives an approximation, because months are 28 to 31 days long and leap years add extra days. A proper calendar calculation avoids that rounding error." },
      { question: "How do I work out someone's exact age on a past or future date?", answer: "This tool gives the age as of today. For another date, take the years, months and days shown and adjust: if the date you need is before today, subtract the gap; if it is after, add it. For forms that ask for age on a specific date — a school admission cut-off, for example — that adjustment from today's breakdown is the reliable route." },
      { question: "How do I calculate the age difference between two people?", answer: "Work out each person's age from their date of birth and subtract. The tool's years-months-days breakdown makes the comparison exact, including leap years — simply comparing birth years can be off by a year if the birthdays fall on different sides of today's date." },
      { question: "Why does my age in days look different on different calculators?", answer: "Because of leap years and the different lengths of calendar months. A rough division of days by 365 ignores leap days, so it drifts by a day every four years. This tool counts actual calendar days, which is why its breakdown can differ by a day or two from a calculator that divides." },
      { question: "What date format should I enter?", answer: "Enter the full date of birth — day, month and year. The calculation uses your browser's local calendar, so the result is your age as of today in your own timezone. If a form asks for age in completed years only, use the years figure and ignore the extra months and days." },
    ],
  },
  "bmi-calculator": {
    aboutText:
      "BMI Calculator turns your height and weight into your body mass index and shows which category it falls into — underweight, healthy weight, overweight or obese. BMI is widely used as a quick, general screening measure for adults, and the result appears immediately from just two numbers. Remember it is a screening tool, not a diagnosis: it does not distinguish muscle from fat, and it does not account for age, pregnancy or certain medical conditions. Treat it as a starting point for planning, not medical advice — if you have health concerns, speak to a qualified professional. It runs in your browser; your height and weight never leave your device.",
    steps: [
      { title: "Enter your height", description: "Add your height in the units the tool asks for." },
      { title: "Enter your weight", description: "Add your current weight as recently measured — a small error in height changes the result noticeably, so double-check both figures." },
      { title: "Calculate", description: "Submit your height and weight to calculate your BMI." },
      { title: "Read the value and category", description: "See your BMI together with its category, and repeat over time with updated measurements if you want to track change." },
    ],
    faqs: [
      { question: "What is BMI and how is it calculated?", answer: "Body mass index is your weight in relation to your height. The calculator divides your weight by the square of your height and matches the result to a standard category range." },
      { question: "Is BMI accurate for athletes or older adults?", answer: "Not always. Very muscular people can score high despite low body fat, and older adults may score lower despite higher body fat. Use BMI alongside other measures, such as waist size and overall fitness, for a fuller picture." },
      { question: "Should I act on my BMI result alone?", answer: "No. BMI is an estimate for general guidance, not medical advice. If the result worries you, or you are planning a major change to diet or exercise, check with a healthcare professional first." },
      { question: "Are the healthy BMI ranges different for Asian and South Asian people?", answer: "Yes. The WHO's general healthy range is 18.5 to 24.9, but for South and East Asian populations health risks rise at lower BMIs, so several countries use adjusted cut-offs: overweight from 23 instead of 25, and obesity from 27.5 instead of 30. This tool uses the general WHO bands, so if you are of South Asian descent, treat a BMI above 23 as the point to pay attention." },
      { question: "What is a healthy weight for my height?", answer: "Multiply your height in metres squared by 18.5 and by 24.9. At 170 cm, that is 1.7 × 1.7 × 18.5 = 53.5 kg up to 1.7 × 1.7 × 24.9 = 72.0 kg. Any weight inside that band gives a BMI in the healthy range — there is no single ideal number, and the band itself is the target." },
      { question: "Is BMI the same for men and women?", answer: "Yes — the formula and the WHO adult cut-offs are identical for adult men and women. Women naturally carry a higher share of body fat at the same BMI, which is one reason BMI is a rough screen rather than a measure of body fat. A result should be read alongside waist size, activity and general health, not on its own." },
      { question: "Can I use this BMI calculator for my child?", answer: "Only for the number itself. For ages 2 to 19, a BMI must be compared with age- and sex-specific percentile charts, because the same BMI means different things at different ages — a BMI of 18 is healthy for a fifteen-year-old and high for a five-year-old. This tool applies the adult bands, so for a child use a paediatric BMI percentile calculator or ask a doctor." },
    ],
  },
  "percentage-calculator": {
    aboutText:
      "Percentage Calculator solves the common percentage calculations of daily life: what a percentage of a number is, what percentage one number is of another, and how a value changes when a percentage is added or taken away. Shoppers check a sale price, students work through homework, small business owners mark up prices — if a problem can be phrased with the word percent, this tool can solve it, without formulas or a spreadsheet. Change any input and recalculate to test a different scenario. It runs in your browser; the numbers you enter never leave your device.",
    steps: [
      { title: "Choose the problem type", description: "Pick the kind of percentage calculation you want to solve." },
      { title: "Enter the numbers you know", description: "Add the figures you have, such as the percentage and the total, watching where the decimal point falls." },
      { title: "Calculate", description: "Submit the values to calculate the missing number." },
      { title: "Read and test", description: "Read the result alongside the values you entered, then change an input and recalculate to test a different scenario, such as a bigger discount." },
    ],
    faqs: [
      { question: "What kinds of percentage problems can it solve?", answer: "The everyday ones: finding a percentage of a number, finding what percentage one number is of another, and working out a value after a percentage increase or decrease." },
      { question: "What is the difference between percent and percentage points?", answer: "A move from 10% to 15% is a 5 percentage point rise, but a 50% increase relative to the original 10%. The calculator works with the figures you enter, so be clear which one you mean." },
      { question: "Can I use it for sale prices and discounts?", answer: "Yes. Enter the original price and the discount percentage to find the sale price and the amount saved, which is handy for comparing offers while you shop." },
      { question: "How do I find the original price before a discount?", answer: "Divide the sale price by one minus the discount rate. A 800 sale price after 20% off means the original was 800 ÷ 0.80 = 1,000. This tool solves percentage problems from the values you enter, so for the reverse question, divide as shown and check the result by running the forward calculation." },
      { question: "How do I calculate a percentage increase or decrease?", answer: "Subtract the old value from the new one, divide by the old value and multiply by 100. A price rising from 200 to 250 is (250 − 200) ÷ 200 × 100 = 25% more. The same steps with a fall give a negative answer, which is the percentage decrease." },
      { question: "How do I work out my exam marks as a percentage?", answer: "Divide the marks you scored by the total marks and multiply by 100. Scoring 420 out of 500 is 420 ÷ 500 × 100 = 84%. The same method works for any test, assignment or grade boundary — the tool's mode for what percentage one number is of another does exactly this." },
      { question: "How do I apply two percentage changes in a row?", answer: "Apply them one at a time, not by adding the percentages. A 20% rise followed by a 20% fall does not return to the start: 100 becomes 120, then 120 minus 20% is 96. Run the first change in this tool, then use that result as the starting value for the second." },
    ],
  },
  "gst-calculator": {
    aboutText:
      "GST Calculator adds GST to a price or strips it back out, so you can move between a tax-exclusive price and a tax-inclusive total in seconds — with the tax amount and the final price both shown. It is made for shoppers checking a bill, freelancers and small businesses preparing invoices, and sellers working out what portion of a sale is tax. Because GST rates and rules vary by country, product and situation, always use the rate that applies to your specific case: the tool does the arithmetic; it does not decide which rate you should apply, and its result is not tax advice. It runs in your browser; your figures never leave your device.",
    steps: [
      { title: "Enter the price", description: "Type the price you are starting from." },
      { title: "Enter the GST rate", description: "Add the GST rate that applies to this item or service — try a different rate if you are unsure, to see both outcomes." },
      { title: "Choose the direction", description: "Add GST to a tax-exclusive price, or remove it from a tax-inclusive price." },
      { title: "Read the result", description: "The GST amount and the final price are shown clearly — use them on your invoice, quote or bill, checking against your local tax rules." },
    ],
    faqs: [
      { question: "How do I remove GST from a price that already includes it?", answer: "Enter the tax-inclusive price and the rate, and choose the remove option. The tool works backwards to split the total into its pre-tax price and the GST portion — it is not simply the same percentage taken off the total." },
      { question: "Which GST rate should I use?", answer: "The rate that applies to your product or service in your country or region. Rates differ by category and place, so check your local tax authority or your accountant if you are unsure." },
      { question: "What is the difference between GST and VAT?", answer: "They are similar consumption taxes used in different places: GST is the term in countries like India, Australia and Canada, while VAT is used in the UK, the EU and elsewhere. The maths of adding or removing the tax is the same, but the name, rates and rules differ." },
      { question: "What are CGST, SGST and IGST?", answer: "They are how India splits GST between governments. On a sale within one state, the tax splits equally into CGST and SGST — 18% becomes 9% plus 9%. On a sale between states, the whole amount is charged as IGST. This tool gives you the total GST; the split is simply half and half for an intra-state sale. Pakistan has no CGST/SGST split — its federal sales tax applies as a single rate." },
      { question: "What GST rate applies in Pakistan and India?", answer: "Pakistan's standard federal sales tax rate on goods is 18%, while services are taxed by the provinces at their own rates. India restructured its slabs in September 2025: most goods and services are now 5% or 18%, with higher rates for a short list of luxury goods. Rates change with budgets, so always confirm the current rate for your specific item before invoicing." },
      { question: "How do I calculate GST on a mixed bill with different rates?", answer: "Work out each line at its own rate and add the results — a single blended rate on the whole bill is always wrong. For example, 200 of goods at 5% plus 300 at 18% gives 10 plus 54, or 64 GST. Enter each line in this tool separately and add the tax amounts together." },
      { question: "Is GST charged on the discounted price or the original price?", answer: "On the price actually charged — the discounted value. If a 1,000 item is sold at 10% off, GST applies to 900, not 1,000. Enter the final selling price in this tool, not the pre-discount price." },
    ],
  },
  "vat-calculator": {
    aboutText:
      "VAT Calculator adds VAT to a price or removes it, letting you switch between a net price and a gross, VAT-inclusive total — with the tax portion and the final price shown separately. It is for UK and European shoppers checking whether a quoted price includes VAT, freelancers and businesses preparing VAT invoices, and sellers who need to show the net amount, the VAT and the total separately. VAT rates vary by country and by type of goods or services, and some items are reduced-rated or exempt — use the rate that applies to your case and treat the result as arithmetic help rather than tax advice. It runs in your browser; your figures never leave your device.",
    steps: [
      { title: "Enter the price", description: "Type the price you are starting from." },
      { title: "Enter the VAT rate", description: "Add the VAT rate that applies to this item or service." },
      { title: "Choose the direction", description: "Add VAT to a net price, or remove it from a gross price." },
      { title: "Read the split figures", description: "Read the VAT amount and the final price separately, then use them on your invoice or quote, double-checking against local VAT rules." },
    ],
    faqs: [
      { question: "Why can I not just subtract 20% to remove 20% VAT?", answer: "Because 20% VAT is charged on the net price, not the gross price. Removing it means dividing the gross price by 1.20, which gives a smaller VAT portion than 20% of the gross figure. The calculator handles this correctly." },
      { question: "Which VAT rate should I use?", answer: "The standard, reduced or zero rate that applies to your goods or services in your country. Rates and exemptions differ widely, so check your tax authority's guidance if you are unsure." },
      { question: "How is VAT different from GST?", answer: "VAT and GST are both consumption taxes collected at each stage of sale, but they go by different names in different countries — VAT in the UK and EU, GST in places like India, Australia and Canada — with different rates and administration." },
      { question: "What are the VAT rates in the UK and EU?", answer: "The UK standard rate is 20%, with a reduced rate of 5% for items such as home energy and children's car seats, and a zero rate (0%) for most food, books and children's clothing. EU countries set their own standard rates, typically between 17% and 27%. Always use the rate that applies to your specific goods or services — the tool does the arithmetic once you enter it." },
      { question: "What is the difference between zero-rated and exempt?", answer: "Zero-rated means VAT is charged at 0% — the seller can still reclaim VAT paid on their own costs. Exempt means no VAT is charged at all, and the seller generally cannot reclaim VAT on related costs. The price to the customer looks the same either way, but the seller's accounting differs, so the distinction matters for businesses, not shoppers." },
      { question: "How do I work out the VAT on a whole invoice?", answer: "Calculate each line at its own rate and add the results, just as with GST — a single rate across a mixed invoice is wrong when some items are reduced-rated or zero-rated. Enter each line in this tool separately and add the VAT amounts together for the invoice total." },
      { question: "Does VAT apply to services as well as goods?", answer: "Yes — most services are taxable, including professional services, repairs and digital services, usually at the standard rate of the country where the service is supplied. Some services, such as certain financial, health and education services, are exempt or zero-rated depending on the country. The place of supply rules decide which country's rate applies for cross-border services." },
    ],
  },
  "discount-calculator": {
    aboutText:
      "Discount Calculator turns an original price and a discount percentage into the price you actually pay and the amount you save — the buyer's-side view of a sale. Retailers present discounts in different ways — percent off, a fixed amount off, or a final sale price — and this tool puts them on a common footing so the comparison is fair: run each offer in turn and compare final prices, because a bigger percentage is not always the better deal if the starting prices differ. For a second discount on an already discounted price, run the calculation twice, using the discounted price as the new starting price. It runs in your browser; your figures never leave your device.",
    steps: [
      { title: "Enter the original price", description: "Type the item's price before the discount." },
      { title: "Enter the discount percentage", description: "Add the percentage being offered — the percentage, not the sale price, unless the tool asks for it." },
      { title: "Calculate", description: "Submit the figures to calculate the discounted price." },
      { title: "Read the price and the saving", description: "The final price alongside the amount saved — compare offers by entering each discount in turn, then decide whether the deal is worth it before you buy." },
    ],
    faqs: [
      { question: "How is the sale price calculated?", answer: "The discount percentage is applied to the original price to find the saving, and the saving is subtracted from the original price. Both figures — what you pay and what you save — are shown." },
      { question: "Does it handle a second discount on an already discounted price?", answer: "You can run the calculation twice: first on the original price, then again using the discounted price as the new starting price. That mirrors how successive discounts actually apply." },
      { question: "Is the discounted price the same as the price after tax?", answer: "Not necessarily. The discount applies to the pre-tax price, and sales tax or VAT may then be added to the discounted figure, depending on where you shop." },
      { question: "Which is better — 30% off or a fixed 500 off?", answer: "It depends on the starting price. On a 1,000 item, 30% off saves 300, so the fixed 500 wins; on a 2,000 item, 30% off saves 600 and wins. Run each offer in this tool and compare the final prices — never compare the percentages or the fixed amounts directly, because they are measured on different bases." },
      { question: "How do I find the original price from a sale price?", answer: "Divide the sale price by one minus the discount. A 700 sale price after 30% off means the original was 700 ÷ 0.70 = 1,000. Shops sometimes show only the sale price and the discount, so this reverse calculation is the way to check whether the 'before' price is genuine." },
      { question: "Is a '70% off' sale always a good deal?", answer: "Not necessarily — the discount is only as honest as the starting price. A 70% cut from an inflated 'was' price can still cost more than a smaller discount from a fair price. Compare the final price you will actually pay against the same item elsewhere, rather than trusting the size of the percentage." },
      { question: "Do I pay tax on the discounted price or the original price?", answer: "On the discounted price — the amount you actually pay. Tax is calculated on the final selling price after the discount, not on the pre-discount figure. Work out the sale price here first, then apply tax to that figure." },
    ],
  },
  "profit-calculator": {
    aboutText:
      "Profit Calculator shows whether a sale actually makes money, and by how much. From the cost of an item and the price you sell it for, it calculates the profit in cash terms, the margin as a share of the selling price and the markup as a share of the cost — three numbers that describe the same sale from different angles. It is for sellers, freelancers and small business owners checking a price before quoting it. The results are estimates for planning, based on the figures you enter, and they are not financial advice: they do not include overheads, fees or taxes unless you build those into your cost figure, so include every real cost you can. It runs in your browser; your figures never leave your device.",
    steps: [
      { title: "Enter the cost", description: "Add the cost of the item or service, including everything it took to produce or deliver it — and check for missing costs such as fees, packaging or delivery." },
      { title: "Enter the selling price", description: "Add the selling price you are considering." },
      { title: "Calculate", description: "Submit the figures to calculate the result." },
      { title: "Read all three figures", description: "Read the profit amount, the margin percentage and the markup percentage together — then adjust the selling price until it gives the profit you need, before you quote a customer." },
    ],
    faqs: [
      { question: "What is the difference between margin and markup?", answer: "Margin is profit as a percentage of the selling price, while markup is profit as a percentage of the cost. For the same sale, markup is always the higher percentage, because its base — the cost — is smaller than the selling price." },
      { question: "Should I include overheads in the cost?", answer: "Yes, if you want a realistic profit figure. Include direct costs plus a fair share of fees, shipping, packaging and other expenses, or the profit shown will overstate what you actually keep." },
      { question: "How is this different from the Margin Calculator?", answer: "The Profit Calculator starts from a known cost and selling price and reports the outcome. The Margin Calculator is built for the reverse problem: working out what price to charge to hit a target margin or markup." },
      { question: "What is my break-even selling price?", answer: "The price at which profit is zero — exactly your total cost. Any price above it makes a profit; any price below it makes a loss. Enter your full cost, including overheads, fees and taxes you have built in, and the break-even price is that cost figure itself. Price above it by the margin you need, and check the result here." },
      { question: "How do I calculate profit after a discount?", answer: "Use the discounted price as the selling price. If an item costs 600 and you sell it at 1,000 with a 10% discount, the real selling price is 900 and the profit is 300, not 400. Enter 900 as the selling price here and the margin and markup will reflect the sale as it actually happened." },
      { question: "Can profit be negative — what does a loss look like here?", answer: "Yes. If the selling price is below the cost, the profit figure comes out negative, and that negative number is your loss per item. A −150 profit on a 600 cost means you lose 150 on every sale — the tool shows it plainly so a bad price is obvious before you quote it." },
      { question: "What is the difference between profit margin and ROI?", answer: "Profit margin measures one sale: profit as a share of the selling price. ROI measures an investment over time: total gain as a share of everything you put in. A product can have a healthy margin and still give a poor ROI if it sells slowly or ties up money for months — use this tool for the sale, and the ROI Calculator for the investment." },
    ],
  },
  "scientific-calculator": {
    aboutText:
      "Scientific Calculator handles the maths a basic calculator cannot: everyday arithmetic plus scientific operations such as powers, roots, logarithms and trigonometry, all in one place in your browser. It suits students working through homework and exam preparation, engineers and technicians checking a figure, and anyone who occasionally needs a sine, a square root or an exponent without hunting down a physical calculator or installing an app. Check the expression on screen before calculating, since a misplaced bracket changes the answer — and for exams, check whether your exam board permits online calculators, as many require an approved handheld model instead. Your numbers never leave your device.",
    steps: [
      { title: "Enter the first number", description: "Type or tap the first number of your calculation." },
      { title: "Choose the operation", description: "Pick basic arithmetic or a scientific function, such as a power, root, logarithm or trigonometric function." },
      { title: "Complete the expression", description: "Enter the remaining numbers, watching brackets if your expression has more than one step — and check the expression on screen before calculating." },
      { title: "Calculate and continue", description: "Get the result, and use it as the starting point for a further calculation if your problem has several stages — or clear the entry and start fresh." },
    ],
    faqs: [
      { question: "What makes this different from a basic calculator?", answer: "A basic calculator covers addition, subtraction, multiplication and division. A scientific calculator adds powers, roots, logarithms, trigonometric functions and support for longer expressions with brackets." },
      { question: "Can I use it for homework and study?", answer: "Yes, for practice and checking your working. For exams, check whether your exam board permits online calculators — many require an approved handheld model instead." },
      { question: "How do I enter a calculation with brackets?", answer: "Type or tap the expression in the same order you would write it, including the brackets around the part to be calculated first. The calculator evaluates bracketed parts before the rest." },
      { question: "In what order does the calculator work out a calculation?", answer: "It follows the standard order: brackets first, then powers and roots, then multiplication and division, then addition and subtraction. So 2 + 3 × 4 gives 14, not 20 — the multiplication happens before the addition. Use brackets whenever you want a different order, and check the expression on screen before calculating." },
      { question: "What happens if I take the square root of a negative number?", answer: "The tool shows an error, because no real number squared gives a negative result. Square roots of negative numbers belong to complex numbers, which this calculator does not handle. Check the sign inside the root — a misplaced minus is the usual cause." },
      { question: "Can I use it for percentages and ratios?", answer: "Yes — a percentage is just a division by 100, and a ratio is a division of one number by another, both of which this calculator handles as ordinary arithmetic. For the common percentage problems of daily life, the dedicated Percentage Calculator is quicker, but the maths here is the same." },
      { question: "Does it work with very large or very small numbers?", answer: "Yes. Results that are too long to display appear in scientific notation, such as 1.5e9 for 1,500,000,000 — the 'e' means 'times ten to the power of'. The notation is a display shorthand, not a different answer, and the full value can be worked out from it." },
    ],
  },
  "date-calculator": {
    aboutText:
      "Date Calculator answers three kinds of date question: how much time passes between two dates, what date you land on when you add or subtract a period from a starting date, and how two dates compare — with leap years, month lengths and year boundaries handled for you. It is for planners working out project deadlines, travellers counting days until a trip, and anyone who needs a reliable answer to questions like 90 days from today or how many weeks between two events. Unlike the Age Calculator, which is specialised for a person's age, this tool works with any two dates or any starting date and duration. The result is exact calendar arithmetic rather than an approximation. It runs in your browser; your dates never leave your device.",
    steps: [
      { title: "Choose the mode", description: "Compare two dates, or add or subtract time from one date." },
      { title: "Enter the dates", description: "Add the starting date, or both dates if you are comparing — and check them carefully, since one wrong digit shifts the whole result." },
      { title: "Add the duration", description: "If adding or subtracting, enter the number of days, weeks, months or years to move." },
      { title: "Read and repeat", description: "Read the duration between the dates, or the resulting date — then repeat with different dates or durations to test alternative deadlines or plans." },
    ],
    faqs: [
      { question: "Does it count the start and end dates themselves?", answer: "Date durations are normally measured as the gap between the two dates, not including both endpoints. If you need an inclusive count — for example, a holiday spanning both days — add one day to the result." },
      { question: "What date is 90 days from today?", answer: "Enter today as the starting date, choose add, and enter 90 days. The tool returns the resulting date, which is far more reliable than counting months by hand." },
      { question: "How is this different from the Age Calculator?", answer: "The Age Calculator is specialised for a person's age in years, months and days from a birth date. The Date Calculator is general-purpose: any dates, any duration, and comparisons in either direction." },
      { question: "Does it count working days or calendar days?", answer: "Calendar days — every day on the calendar, including weekends and public holidays. If you need working days, count the calendar days here first, then subtract weekends and holidays yourself: roughly two days per full week in the period, plus any public holidays that fall inside it." },
      { question: "How many weeks are between two dates?", answer: "Divide the days between the dates by seven. The tool gives you the exact day count, and the same result in weeks is that number divided by 7 — 90 days is 12 weeks and 6 days. For project planning, the weeks figure is often more useful than the raw day count." },
      { question: "What happens when I add a month to 31 January?", answer: "Calendar months have different lengths, so adding one month to 31 January lands on the last day of February — 28 February, or 29 in a leap year. The tool handles month lengths and leap years for you, so the result always lands on a real calendar date rather than an impossible one like 31 February." },
      { question: "Can I count down to a future date?", answer: "Yes — enter today as the first date and the future date as the second, and the tool gives the exact days, weeks and months remaining. It works the same way for deadlines, trips, exams and events, and the count updates if you re-enter today's date." },
    ],
  },
  "roi-calculator": {
    aboutText:
      "ROI Calculator measures how well an investment performed by comparing what you gained with what you put in, returning the return on investment as a percentage — a single figure that lets you compare opportunities of very different sizes on equal terms: a $5,000 gain means something very different on a $10,000 investment than on a $100,000 one. It is for investors comparing stocks, property or a business venture, and business owners judging a marketing campaign or equipment purchase. The result is an estimate for planning based on the figures you enter, not financial advice: ROI does not account for how long the money was invested, risk, taxes or fees unless you include them in your figures. It runs in your browser; your figures never leave your device.",
    steps: [
      { title: "Enter the initial investment", description: "Add the initial investment or total cost, including any additional costs you incurred so the return reflects the true outlay." },
      { title: "Enter the final value", description: "Add the final value gained, or the profit, as the tool asks." },
      { title: "Calculate", description: "Submit the figures to calculate the return on investment." },
      { title: "Read and compare", description: "Read the ROI as a percentage alongside the gain in cash terms — repeat for each investment or project, and judge them together with risk and timescale, not ROI alone." },
    ],
    faqs: [
      { question: "How is ROI calculated?", answer: "ROI is the net gain — final value minus initial cost — divided by the initial cost, expressed as a percentage. A $2,000 gain on a $10,000 investment is a 20% ROI." },
      { question: "Does ROI account for time?", answer: "No. A 20% return over one year is very different from 20% over ten years, but simple ROI shows the same figure for both. For time-adjusted comparison, also consider the annualised return." },
      { question: "Should I include fees and taxes in the cost?", answer: "Yes, for a realistic result. Fees, taxes and ongoing costs reduce the true return, so include them in the initial cost or subtract them from the gain before judging the outcome." },
      { question: "What is the difference between ROI and annualised return?", answer: "ROI is the total return over the whole period, whatever its length — a 20% ROI over two years is not the same as 20% in one year. Annualised return spreads that gain evenly across each year so investments of different lengths can be compared. This tool gives the simple total ROI; to compare periods of different lengths, divide the gain by the number of years as a rough annual figure." },
      { question: "What does a negative ROI mean?", answer: "You lost money. An ROI of −10% means you got back 10% less than you put in. The tool returns the negative figure directly, so a losing investment is obvious — and the size of the negative number tells you how much of the investment was lost." },
      { question: "Can I compare two investments with different time periods?", answer: "Not on raw ROI alone — a 30% return over five years is worse per year than a 20% return over one year. Annualise roughly by dividing each ROI by its number of years. The tool tells you the total return; you must adjust for time before ranking investments." },
      { question: "How do I calculate ROI for a marketing campaign?", answer: "Take the revenue the campaign brought in, subtract everything the campaign cost — ad spend, tools, staff time if you count it — and divide that gain by the cost. A campaign that cost 50,000 and brought 75,000 of extra revenue has an ROI of (75,000 − 50,000) ÷ 50,000 = 50%. The result only means something if the revenue figure is genuinely caused by the campaign." },
    ],
  },
  "tip-calculator": {
    aboutText:
      "Tip Calculator works out the tip on a bill and splits the total fairly between everyone at the table. Enter the bill amount, choose a tip percentage and say how many people are sharing, and it shows the tip, the total to pay and what each person owes — settling the awkward end-of-meal moment in seconds. The tool does the arithmetic; the tip percentage is your choice. Customs vary by country and by service — a percentage that is generous in one place may be standard in another — so pick the rate that fits the situation. It runs in your browser; your bill figures never leave your device.",
    steps: [
      { title: "Enter the bill", description: "Type the total bill amount before the tip." },
      { title: "Choose the tip percentage", description: "Pick the tip percentage you want to leave — in the US, 15 to 20% is common in restaurants, while elsewhere tipping may be smaller or already included." },
      { title: "Set the split", description: "Enter the number of people splitting the bill, if you are sharing it — leave it at one for your own bill." },
      { title: "Read the totals", description: "See the tip amount, the total including the tip and, if splitting, what each person owes — rounding up slightly if you prefer a round figure per person." },
    ],
    faqs: [
      { question: "How much should I tip?", answer: "It depends on local custom and the service received. In the US, 15 to 20% is common in restaurants, while in many other countries tipping is smaller or already included. Choose the percentage that fits where you are." },
      { question: "How does the bill split work?", answer: "The tip is added to the bill to give the total, and the total is divided by the number of people. Everyone pays an equal share, which is the simplest fair split when the meal was shared evenly." },
      { question: "Should the tip be calculated before or after tax?", answer: "Custom varies, but tipping on the pre-tax amount is common practice in the US. If your bill shows tax separately, enter the pre-tax subtotal if you want to follow that convention." },
      { question: "How much should I tip in different countries?", answer: "In the United States 15–20% is standard in restaurants; in the UK 10–15% is customary and often discretionary; in much of Europe a small tip or rounding up is normal; in Pakistan and India tipping is appreciated but not fixed — 10% is a common guide in restaurants. Always check whether a service charge is already on the bill before adding a tip." },
      { question: "Should I tip on takeaway or delivery?", answer: "It is optional and smaller than a sit-down tip. Many people tip a delivery rider a flat amount rather than a percentage, especially for a short trip. The tool works the same way for any bill — enter the total and choose the percentage that fits the situation." },
      { question: "What if a service charge is already added to the bill?", answer: "Then you have already tipped — a service charge is the restaurant's tip, and adding another percentage on top means paying twice. Check the bill first: if a service charge is listed, either pay no extra tip or add only a small amount for exceptional service." },
      { question: "How do I split a bill when people ordered different amounts?", answer: "This tool splits the total evenly, which is fair when everyone shared roughly equally. If one person ordered far more, work out that person's share separately — their items plus their share of the tip — and split the rest evenly among the others. The even split is the quick answer; the item-by-item split is the fair one." },
    ],
  },
  "margin-calculator": {
    aboutText:
      "Margin Calculator solves pricing problems from the margin or markup side: given your cost and the margin or markup you want, it works out the selling price that delivers it — the pricing-first companion to the Profit Calculator, which checks a price you already have. The classic trap is adding a 30% markup and assuming that means a 30% margin — it does not, because markup is measured on cost while margin is measured on price (on a $100 cost with a 30% markup, the price is $130 and the margin is about 23%). The results are estimates for planning based on the figures you enter, and they are not financial advice — sense-check the calculated price against your market. It runs in your browser; your figures never leave your device.",
    steps: [
      { title: "Enter the cost", description: "Add the cost of the item or service, and check that it includes the real expenses behind the item." },
      { title: "Choose margin or markup", description: "Pick whether you are working with a target margin or a target markup." },
      { title: "Enter the target percentage", description: "Add the margin or markup percentage you want to achieve, then calculate." },
      { title: "Read and adjust", description: "Read the selling price together with the resulting margin and markup figures, and adjust the target and recalculate until the price fits both your profit goal and your market." },
    ],
    faqs: [
      { question: "How is this different from the Profit Calculator?", answer: "The Profit Calculator starts with a cost and a selling price and reports the profit, margin and markup that result. The Margin Calculator works backwards: it starts with a cost and a desired margin or markup and calculates the selling price you need to charge." },
      { question: "Why is a 30% markup not a 30% margin?", answer: "Markup is profit divided by cost, while margin is profit divided by selling price. On a $100 cost with a 30% markup, the price is $130 and the margin is $30 divided by $130, about 23% — not 30%." },
      { question: "What cost should I enter?", answer: "The full cost of supplying the item or service: purchase or production cost plus a fair share of fees, shipping and overheads. An understated cost gives a price that looks profitable but is not." },
      { question: "How do I work out the selling price from a target margin?", answer: "Divide the cost by one minus the margin. For a 100 cost and a 30% margin, the price is 100 ÷ (1 − 0.30) = 142.86. That is exactly what this tool does when you enter a cost and a margin — the price it returns is the one that delivers that margin on every sale." },
      { question: "Can a margin be 100%?", answer: "No — margin is profit as a share of the selling price, and the price always includes the cost, so the margin is always below 100%. A 100% margin would mean the item cost nothing. If a supplier promises a 100% margin, they are confusing margin with markup, which can exceed 100%." },
      { question: "What is the difference between gross margin and net margin?", answer: "Gross margin uses only the direct cost of the item; net margin subtracts everything else too — rent, wages, fees and taxes. This tool works with the cost figure you enter, so enter the direct cost for a gross margin, or the fully loaded cost for a figure closer to net margin. State which one you mean when you quote it." },
      { question: "How does a discount change my margin?", answer: "It cuts it twice over: the price falls while the cost stays the same. A 100 item sold at 130 has a 23% margin; discount it 10% to 117 and the margin falls to about 14.5%. Re-run the discounted price here before offering a sale, because a discount that looks small can take most of the profit." },
    ],
  },
  "length-converter": {
    aboutText:
      "Length Converter switches a measurement between meters, feet, miles and more in an instant — for a recipe in centimeters, a road sign in miles or a room plan in feet — so you can keep working instead of hunting for a conversion factor. One conversion can be the difference between furniture that fits and furniture that does not. Conversions use standard unit definitions, so the arithmetic is exact for the value you enter; for building work, still measure twice and allow for real-world tolerances before cutting material. It runs in your browser, and the values you enter never leave your device.",
    steps: [
      { title: "Enter the length", description: "Type the value you want to convert. Nothing is stored or sent anywhere." },
      { title: "Choose your units", description: "Pick the unit you are converting from, such as meters or feet, and the unit you want, such as miles or centimeters." },
      { title: "Read the result", description: "The converted length is shown straight away; choose a target unit that reads sensibly, like millimeters for something tiny or kilometres for a long distance." },
      { title: "Use it — carefully where it counts", description: "Apply the result to your plan, purchase or calculation, double-checking before any critical cut." },
    ],
    faqs: [
      { question: "Which length units can I convert?", answer: "The converter covers meters, feet, miles and more, including common metric and imperial units. Pick the units you have and the units you need, and the tool handles the conversion between them." },
      { question: "How accurate are the conversions?", answer: "Conversions use standard unit definitions, so the arithmetic is exact for the value you enter. For building work, still measure twice and allow for real-world tolerances before cutting material." },
      { question: "Can I convert a very small or very large length?", answer: "Yes. Enter the value as given and choose the most suitable target unit, so a tiny measurement reads sensibly in millimeters and a long distance reads sensibly in kilometers or miles." },
      { question: "How many feet are in a meter?", answer: "One meter is 3.28084 feet. The converter applies that standard definition, so you do not need to remember the figure — enter the meters and read the feet straight away, or convert back to check the result." },
      { question: "How many kilometres are in a mile?", answer: "One mile is 1.60934 kilometres. Road signs in miles and distances in kilometres are easy to mix up on a trip, so convert the distance before judging how far away something is or how long the drive will take." },
      { question: "How many centimetres are in an inch?", answer: "Exactly 2.54 centimetres. Screen sizes, paper and fabric are often quoted in inches, while rulers and sewing patterns use centimetres — convert the figure instead of guessing, especially where a close fit matters." },
      { question: "Which unit should I use to measure a room?", answer: "Use the unit that reads most sensibly for the size: metres or feet for a room, centimetres or inches for small details. The converter shows the result straight away, so pick the target unit that gives you a number you can picture — and measure twice before ordering furniture or flooring." },
    ],
  },
  "weight-converter": {
    aboutText:
      "Weight Converter turns a value between kilograms, pounds, grams and more, so a recipe from another country, a gym target, a product weight or an airline baggage limit makes sense in the units you actually use — before a small unit error becomes a ruined dish or an excess baggage fee. For most recipes, rounding to a sensible figure is fine; for baking or postage, keep more precision. It runs in your browser, on desktop or mobile, and the values you enter never leave your device.",
    steps: [
      { title: "Enter the weight", description: "Type the value you want to convert. It stays on your device." },
      { title: "Choose your units", description: "Pick the unit you are converting from, such as kilograms or pounds, and the one you want, such as grams or ounces." },
      { title: "Read the converted weight", description: "Try another unit if the result is easier to read at a different scale." },
      { title: "Use the result", description: "Apply it to your recipe, packing or postage calculation with the precision the job needs." },
    ],
    faqs: [
      { question: "Which weight units can I convert?", answer: "The converter covers kilograms, pounds, grams and more, including common metric and imperial units. Choose the unit your source uses and the unit you want to work in." },
      { question: "Should I round the result for cooking?", answer: "For most recipes, rounding to a sensible figure is fine, since ingredient amounts tolerate small differences. For baking or postage, keep more precision, as small weight differences matter more there." },
      { question: "Can I use it on my phone while shopping?", answer: "Yes. The converter works in a mobile browser, free and without signup, so you can check a product weight in the store before you buy." },
      { question: "How many pounds are in a kilogram?", answer: "One kilogram is 2.20462 pounds. Gym targets, body weight and product weights are quoted in kilograms in most countries and pounds in others, so convert before comparing two figures that look similar but are not." },
      { question: "How many grams are in a pound?", answer: "One pound is 453.592 grams. Recipes from another country often switch between grams and pounds, so convert the ingredient amounts before cooking — and keep more precision for baking, where small weight differences matter." },
      { question: "What is a stone in kilograms?", answer: "One stone is 14 pounds, which is 6.35029 kilograms. Body weight in the UK is still commonly given in stones and pounds, so convert to kilograms when a chart, app or doctor's form asks for metric units." },
      { question: "How do I convert kilograms to pounds for airline baggage?", answer: "Enter the bag's weight in kilograms and convert it to pounds, then compare the result with the airline's limit in its own unit. Keep a small margin under the limit — scales at home and at the airport can disagree — so a bag that is borderline at home does not become an excess baggage fee at check-in." },
    ],
  },
  "area-converter": {
    aboutText:
      "Area Converter switches a measurement between square units, acres and hectares, so property listings, garden plans and land records given in different units can be compared like with like — one acre is 43,560 square feet, and one hectare is about 2.47 acres, which is why land in hectares sounds smaller than it is. Convert a second listing the same way and the two areas become directly comparable, whether you are judging a plot, planning beds and lawns, or costing flooring and turf (add a small allowance for cuts and waste before ordering). It runs in your browser; your values never leave your device.",
    steps: [
      { title: "Enter the area", description: "Type the area value you want to convert. Nothing is stored or sent anywhere." },
      { title: "Choose your units", description: "Pick the unit you are converting from, such as acres or square meters, and the one you want, such as hectares or square feet." },
      { title: "Read the converted area", description: "Judge the size in the terms you understand best." },
      { title: "Compare and use", description: "Convert any second listing the same way for a fair comparison, then use the result for comparing properties, planning a garden or costing materials." },
    ],
    faqs: [
      { question: "How many square feet are in an acre?", answer: "One acre is 43,560 square feet. The converter applies that standard definition, so you do not need to remember the figure or work it out by hand." },
      { question: "Is a hectare bigger than an acre?", answer: "Yes. One hectare is about 2.47 acres, so land described in hectares will sound smaller in acres until you convert it. The tool makes that comparison immediate." },
      { question: "Can area conversion help with flooring or turf?", answer: "Yes. Convert the room or garden area into the unit your supplier prices by, then add a small allowance for cuts and waste before ordering materials." },
      { question: "How many square metres are in an acre?", answer: "One acre is 4,046.86 square metres. Property and land listings switch between acres, hectares and square metres depending on the country, so convert the area into the unit you understand best before judging the size of a plot." },
      { question: "How many acres are in a square mile?", answer: "640 acres. A square mile is a large unit for land, and converting it into acres makes it easier to picture — a 640-acre block is exactly one square mile, which helps when comparing farms, estates or large plots." },
      { question: "How big is a hectare in square metres?", answer: "One hectare is 10,000 square metres — a square 100 metres on each side. Since one hectare is about 2.47 acres, land described in hectares sounds smaller than it is until you convert it, which is why the comparison matters for property listings." },
      { question: "Can I compare two property listings in different units?", answer: "Yes — that is one of the main uses. Convert each listing into the same unit, acres or square metres, and the two areas become directly comparable, so a plot that looks bigger only because of its unit cannot mislead you." },
    ],
  },
  "temperature-converter": {
    aboutText:
      "Temperature Converter switches a temperature between Celsius, Fahrenheit and Kelvin instantly, so a forecast of 72 degrees, an oven setting from a foreign recipe or a science value stops being a guess. Temperature scales do not share the same zero point and use different degree sizes, which is why converting in your head is error-prone and why a single fixed adjustment only works at one temperature — the tool applies both the scale and the offset correctly at every value. If a result looks surprising, double-check you chose the right starting unit. It runs in your browser; your values never leave your device.",
    steps: [
      { title: "Enter the temperature", description: "Type the value you want to convert. It stays on your device." },
      { title: "Choose your units", description: "Pick the unit you are converting from, such as Celsius or Fahrenheit, and the unit you want." },
      { title: "Read the converted temperature", description: "The result applies the standard formula, including the offset between the scales' zero points." },
      { title: "Use the result", description: "Set the oven, pack for the weather or complete your calculation — for reference, 20 °C is about 68 °F, mild room temperature." },
    ],
    faqs: [
      { question: "Why can I not just add or subtract a fixed number?", answer: "Because the scales start at different zero points and use different degree sizes, a single fixed adjustment only works at one temperature. The converter handles both the scale and the offset correctly at every value." },
      { question: "What is Kelvin used for?", answer: "Kelvin is the scientific temperature scale, starting at absolute zero. It appears in physics, chemistry and engineering work, and the converter can switch between Kelvin and everyday scales when you need it." },
      { question: "How do I convert Celsius to Fahrenheit?", answer: "Enter the Celsius value and choose Fahrenheit as the target unit. The converter applies the standard formula, which includes both scaling and the offset between the two zero points, so you do not need to calculate it yourself." },
      { question: "What is 0 degrees Celsius in Fahrenheit?", answer: "32 degrees Fahrenheit. Water freezes at 0 °C and 32 °F, which is the easiest anchor point to remember between the two scales — a forecast of 0 °C means freezing conditions, whatever scale you normally use." },
      { question: "What is 100 degrees Celsius in Fahrenheit?", answer: "212 degrees Fahrenheit. Water boils at 100 °C and 212 °F at sea level, so that pair is the second anchor point — with 0 °C at 32 °F, the two scales are fixed, and every temperature in between follows the same formula." },
      { question: "What temperature is the same in Celsius and Fahrenheit?", answer: "Minus 40 degrees — minus 40 °C equals minus 40 °F. It is the one point where the two scales meet, and it is also a genuinely cold day: well below freezing, so pack for extreme cold if a forecast ever shows it." },
      { question: "What oven temperature is 180 degrees Celsius in Fahrenheit?", answer: "About 356 °F — recipes usually round it to 350 °F. Foreign recipes often give oven settings in Celsius while your oven dial shows Fahrenheit, so convert the setting before baking, since a wrong temperature changes how a cake or roast turns out." },
    ],
  },
  "time-zone-converter": {
    aboutText:
      "Time Zone Converter compares times across global zones, so a call set for 3 pm in London — morning in New York, late evening in Sydney — is one everyone actually joins at the intended time. Conversion depends on the date, because daylight saving shifts the offset in many regions for part of the year, so always convert for the actual meeting date, not just today. And always state the zone in the invitation: a bare time with no zone is the most common cause of cross-border scheduling mistakes. It runs in your browser; the times and zones you enter never leave your device.",
    steps: [
      { title: "Choose your starting zone", description: "Select the time zone you are starting from. Nothing is stored or sent anywhere." },
      { title: "Enter the time — for the real date", description: "Add the time you want to convert, for the date of the meeting itself, since offsets change with daylight saving." },
      { title: "Choose the target zone", description: "Pick the zone you want to convert to, and add further zones if you are coordinating more than two places." },
      { title: "Confirm with the zone stated", description: "Read the corresponding times, then confirm the agreed time with everyone, stating the zone, before sending invitations." },
    ],
    faqs: [
      { question: "Does the converter handle daylight saving time?", answer: "Time zone conversion depends on the date, because daylight saving shifts the offset in many regions during part of the year. Always check the conversion for the actual meeting date, not just for today." },
      { question: "How do I find a meeting time that suits everyone?", answer: "Convert your proposed time into each attendee's zone and look for overlap in working hours. If no time suits everyone, rotate the inconvenience across meetings rather than always asking the same people to join late at night." },
      { question: "Should I state the time zone in invitations?", answer: "Yes. Always write the time with its zone, or send a calendar invitation that carries the zone for you. A bare time with no zone is the most common cause of cross-border scheduling mistakes." },
      { question: "What is the time difference between Pakistan and the UK?", answer: "Pakistan is 5 hours ahead of the UK in winter, when the UK is on Greenwich Mean Time, and 4 hours ahead in summer, when the UK moves to British Summer Time. Always convert for the actual meeting date, since the difference changes when the clocks change." },
      { question: "What is the time difference between Pakistan and New York?", answer: "Pakistan is 10 hours ahead of New York in winter, when New York is on Eastern Standard Time, and 9 hours ahead in summer, when it moves to Eastern Daylight Time. A 3 pm call from Pakistan lands in the early morning in New York, so check the converted time before inviting anyone." },
      { question: "Can I convert a time for a date next month?", answer: "Yes — and you should, because daylight saving shifts the offset in many regions for part of the year. Convert for the date of the meeting itself, not just for today, or a time that works this week can be an hour out by the time the meeting happens." },
      { question: "What does UTC mean in time zones?", answer: "UTC stands for Coordinated Universal Time, and it is the reference every time zone is measured from — Pakistan Standard Time is UTC+5, for example, meaning 5 hours ahead of UTC. Saying a time in UTC avoids all confusion about local clocks and daylight saving." },
    ],
  },
  "data-storage-converter": {
    aboutText:
      "Data Storage Converter switches a value between bits, bytes and storage units, untangling the confusion between internet speeds quoted in bits per second and file sizes quoted in bytes — a byte is eight bits, so a 100 megabit connection downloads at most about 12.5 megabytes per second in ideal conditions. It also helps explain why a 1 TB drive shows less space than expected: makers and operating systems count units differently (1,000 vs 1,024 conventions). Use it to compare devices, plans and files on a like-for-like basis. It runs in your browser; your values never leave your device.",
    steps: [
      { title: "Enter the size or speed", description: "Type the data value you want to convert. It stays on your device." },
      { title: "Choose your units", description: "Pick the unit you are converting from, such as megabytes or megabits, and the one you want, such as gigabytes or bytes." },
      { title: "Read the converted value", description: "Check which convention your device or provider uses — decimal or binary — for an exact match." },
      { title: "Compare and decide", description: "Use the result to judge storage, a download plan or a transfer; for download times, divide size by speed in matching units for a best-case estimate." },
    ],
    faqs: [
      { question: "What is the difference between a bit and a byte?", answer: "A byte is eight bits. Internet speeds are usually quoted in bits per second, while file sizes are usually quoted in bytes, so a 100 megabit connection downloads at most about 12.5 megabytes per second in ideal conditions." },
      { question: "Why does my 1 TB drive show less space?", answer: "Drive makers and operating systems count storage units differently, with one using decimal units and the other binary-style units. The converter helps you translate between those conventions so the difference is expected, not a fault." },
      { question: "How many megabytes are in a gigabyte?", answer: "In decimal terms, one gigabyte is 1,000 megabytes, while in binary terms it is 1,024 mebibytes. The converter applies the unit definitions it lists, so check which unit your device or provider uses for an exact match." },
      { question: "How long will a 1 GB file take to download on a 100 Mbps connection?", answer: "About 80 seconds in ideal conditions. A gigabyte is 8,000 megabits in decimal terms, and dividing the size by the speed in matching units — 8,000 divided by 100 — gives 80 seconds. Real downloads take longer, since networks rarely run at full speed and other traffic shares the connection." },
      { question: "What is the difference between Mbps and MBps?", answer: "Mbps means megabits per second and MBps means megabytes per second, and one byte is eight bits — so 100 Mbps is about 12.5 MBps. Internet providers quote speeds in megabits, while browsers show downloads in megabytes, which is why a 100-megabit connection never shows 100 megabytes per second." },
      { question: "How many megabytes are in a terabyte?", answer: "One million megabytes in decimal terms, or 1,048,576 mebibytes in binary terms — the difference is which convention is used, 1,000 or 1,024. Check which unit your device or provider uses, since the same drive can show a different size in each convention." },
      { question: "Why do internet providers quote speeds in Mbps instead of MBps?", answer: "Because network speeds are traditionally measured in bits per second, while file sizes are measured in bytes. A speed quoted in Mbps sounds eight times larger than the same speed in MBps, so always convert to matching units before comparing a plan's speed with a download size." },
    ],
  },
  "binary-converter": {
    aboutText:
      "Binary Converter switches a value between text, binary, hexadecimal and decimal, showing how the same data looks in each system: every character is assigned a numeric code, and that number written in binary is why the same letter always produces the same pattern of ones and zeros. Hexadecimal — sixteen digits — is the compact way to write binary, which is why it appears in color codes, memory addresses and data dumps. Students use it to check number-system homework, developers to decode values from logs and protocol dumps. Convert the result back to check it matches. It runs in your browser; your values never leave your device.",
    steps: [
      { title: "Enter your value", description: "Type or paste a value in text, binary, hex or decimal form. Keep inputs short while learning, so the output stays easy to follow." },
      { title: "Choose both formats", description: "Pick the format you are converting from and the one you want to convert to." },
      { title: "Read the converted value", description: "Compare the equivalent forms side by side until the relationship between them clicks." },
      { title: "Check by converting back", description: "Convert the result back to the original format to confirm it matches, then use the value in your study, code or debugging work." },
    ],
    faqs: [
      { question: "What is binary, in simple terms?", answer: "Binary is counting with only two digits, 0 and 1. Each digit is a bit, and groups of bits represent numbers, letters and all other data inside a computer." },
      { question: "How does text become binary?", answer: "Each character is assigned a numeric code, and that number is written in binary. Converting text to binary shows those codes, which is why the same letter always produces the same bit pattern in a given encoding." },
      { question: "Can I convert a whole sentence?", answer: "Yes, text conversion works character by character, so a word or sentence converts into a longer string of binary or hex. Keep inputs short while learning, so the output stays easy to follow." },
      { question: "What is the letter A in binary?", answer: "01000001. In the ASCII code the letter A is assigned the number 65, and 65 written in binary is 01000001. Every letter has its own number and its own bit pattern, which is why the same letter always produces the same binary." },
      { question: "What is the number 10 in binary?", answer: "1010. Binary counts with only 0 and 1, so 10 in decimal is one eight plus one two, written as 1010. Small numbers are the easiest way to learn the pattern — try converting 1, 2, 4 and 8 first, then build up from there." },
      { question: "What is hexadecimal used for?", answer: "It is the compact way to write binary — sixteen digits instead of two — which is why it appears in colour codes, memory addresses and data dumps. A web colour like #FF0000 is really three hexadecimal bytes, one each for red, green and blue, and converting it shows the same value in binary or decimal." },
      { question: "How do I convert binary back to text?", answer: "Choose binary as the format you are converting from and text as the target, and the tool shows the characters the bit patterns stand for. Convert the result back again to confirm it matches your original text, which is a good check that nothing was mistyped." },
    ],
  },
  "roman-numeral-converter": {
    aboutText:
      "Roman Numeral Converter turns numbers into Roman numerals and back, so you can read or write them with confidence — clock faces, book chapters, film credits, building dates and formal invitations — including the subtractive pairs that are easy to get wrong, like IV for 4 and IX for 9. Letters stand for values (I 1, V 5, X 10, L 50, C 100, D 500, M 1,000), added together except when a smaller letter before a larger one is subtracted. Traditional numerals work best up to 3,999. Check the result before committing it to print, stone or skin. It runs in your browser; your values never leave your device.",
    steps: [
      { title: "Enter a number or a numeral", description: "Type the number you want to convert, or the Roman numeral you want to decode." },
      { title: "Choose the direction", description: "Convert number to numeral, or numeral back to number." },
      { title: "Read and sanity-check", description: "If you entered a numeral, check the decimal value makes sense in its context." },
      { title: "Convert back to confirm", description: "Run the result back through the converter to confirm it returns to your original value, then use the checked numeral in your design, document or homework." },
    ],
    faqs: [
      { question: "Why is 4 written as IV and not IIII?", answer: "Roman numerals use subtractive notation to avoid repeating a symbol four times. Placing I before V means one less than five, giving 4, and the same rule gives IX for 9 and XL for 40." },
      { question: "What is the largest number I can convert?", answer: "Traditional Roman numerals work best for numbers up to 3,999, since there is no standard single symbol beyond M for 1,000. Larger values need extra notation, which is rarely used in everyday contexts." },
      { question: "Are Roman numerals still used today?", answer: "Yes, mainly for style and tradition: clock faces, monarch and pope names, book chapters, film sequels and building dates. For calculation, ordinary decimal numbers are far more practical." },
      { question: "What is 2026 in Roman numerals?", answer: "MMXXVI — MM for 2,000, XX for 20 and VI for 6. It is a good example of how the system builds numbers by adding symbols together, with the subtractive pairs only where a smaller symbol comes before a larger one." },
      { question: "What is 1999 in Roman numerals?", answer: "MCMXCIX — M for 1,000, CM for 900, XC for 90 and IX for 9. Years in the 1900s are the trickiest to read because they use three subtractive pairs in a row, so converting the result back to a number is the best way to check it." },
      { question: "What does XII mean on a clock face?", answer: "12. Clock faces traditionally use Roman numerals, with XII at the top, III at 3, VI at 6 and IX at 9. Four is usually written as IIII on clocks rather than IV, which is a traditional exception rather than a mistake." },
      { question: "How do I read MCMLXXXIV?", answer: "As 1984 — M is 1,000, CM is 900, LXXX is 80 and IV is 4. Read the numeral left to right, adding each symbol except where a smaller symbol before a larger one is subtracted, and convert the result back to confirm the total." },
    ],
  },
  "password-strength-checker": {
    aboutText:
      "Password Strength Checker gives you an instant, evidence-based estimate of a password's strength and entropy — how much unpredictability it contains — before you rely on it. Feelings are unreliable here: a short password that looks clever can be cracked quickly, while a longer, plainer one may hold up far better, and length plus randomness both raise entropy. Use the score as a guide, not a verdict: the checker cannot know whether a password has appeared in a breach or is shared with another account, so pair a good score with unique passwords and a password manager. It runs in your browser, and the password you test never leaves your device — though as a habit, avoid testing a password you already use for a live account.",
    steps: [
      { title: "Type the password", description: "Enter the password exactly as you would use it. It stays in your browser and is never uploaded." },
      { title: "Read the estimate", description: "See the strength estimate and the entropy figure shown for that password." },
      { title: "See what drags it down", description: "Look at what weakens the score, such as short length or a predictable pattern." },
      { title: "Improve and re-check", description: "Try a longer version or add varied characters and watch the estimate change. When satisfied, use that password for one account only and save it securely." },
    ],
    faqs: [
      { question: "What does entropy mean in a password check?", answer: "Entropy is a rough measure of unpredictability. A password with more entropy has more possible combinations, so it takes an attacker longer to guess by trying every option. Length and randomness both raise entropy." },
      { question: "Does a strong score guarantee my password cannot be cracked?", answer: "No. The score is an estimate, not a guarantee. A password can still be at risk if it has leaked in a breach, is reused elsewhere, or is stolen through phishing, so keep passwords unique and enable two-factor authentication where offered." },
      { question: "Is a long passphrase better than a short complex password?", answer: "Often, yes. Length adds a great deal of entropy, and a long, random passphrase can be both strong and easier to remember than a short string of symbols. The checker lets you compare the two directly." },
    ],
  },
  "ssl-checker": {
    aboutText:
      "SSL Checker inspects the public SSL certificate a website presents — whether it is currently valid, when it expires, and which authority issued it — without digging through browser menus or server settings. The browser padlock depends on that certificate: if it expires or does not match the domain, visitors see warnings and may leave, so catching an expiry early avoids downtime and lost trust. A valid certificate is only one part of a secure site, though — it confirms the connection can be encrypted and matches the domain; it does not prove the site itself is trustworthy. This is a server tool: the domain you enter is sent to complete the lookup.",
    steps: [
      { title: "Enter the domain", description: "Type the domain you want to inspect, without extra paths or tracking parameters." },
      { title: "Run the check", description: "The domain is sent to the server, which retrieves the certificate the site presents." },
      { title: "Read the certificate details", description: "Confirm the certificate is valid for that domain, and note the expiry date and the issuer." },
      { title: "Act before expiry", description: "If it is expired or mismatched, contact the site owner or hosting provider. Set a reminder before the expiry date so renewal happens before visitors see a warning." },
    ],
    faqs: [
      { question: "What does the SSL Checker actually inspect?", answer: "It inspects the public SSL certificate presented by the site, including whether it is currently valid, when it expires, and which authority issued it. It reports what the site presents, rather than auditing the whole site." },
      { question: "Does a valid certificate mean a website is safe?", answer: "Not entirely. A valid certificate confirms the connection can be encrypted and the certificate matches the domain, but it does not prove the site itself is trustworthy. Stay alert for phishing and other scams even on sites with valid certificates." },
      { question: "Can I check a site I do not own?", answer: "Yes. Certificates are public, so you can check any public website. This is useful if you want to verify a site before entering personal details, or to report a problem to its owner." },
    ],
  },
  "whois-lookup": {
    aboutText:
      "WHOIS Lookup reads the public registration record of a domain: when it was created, when it expires, which registrar manages it and its name servers — useful when you are thinking about buying a domain, confirming your own registration and expiry dates, or investigating a suspicious website. Keep expectations realistic: many records are redacted for privacy, so personal contact details are often hidden, and what you see is the public record, not private information about the person behind the domain. This is a server tool: the domain you enter is sent to retrieve the record.",
    steps: [
      { title: "Enter the domain name", description: "Type the domain you want to look up, without a page path." },
      { title: "Run the lookup", description: "The domain is sent to the server, which retrieves its public registration record." },
      { title: "Read the dates and registrar", description: "Check the creation and expiry dates to understand the domain's history, and note the registrar and name server details." },
      { title: "Use what you learn", description: "Judge from the expiry date whether a domain may become available, confirm your own renewal dates, or use the registrar/contact route shown if you need to reach the owner." },
    ],
    faqs: [
      { question: "What information does a WHOIS lookup show?", answer: "Typically the registrar, creation and expiry dates, and name server details, where available. Personal contact details are often redacted by privacy services, so they may not appear in the record at all." },
      { question: "Can I find out who owns any domain?", answer: "Not always. You can see the public registration record, but if the owner uses privacy protection, their personal details will be hidden. The record still shows the registrar and the domain dates." },
      { question: "Why do some WHOIS results look incomplete?", answer: "Registries redact personal data to protect privacy, and different registries publish different fields. An incomplete-looking record usually reflects redaction or registry policy, not a tool error." },
    ],
  },
  "dns-lookup": {
    aboutText:
      "DNS Lookup queries the public DNS records for a domain — the instructions that point visitors to the web server, email to the mail server, and handle verification and routing — so you can see what they currently say when a site will not load or mail stops arriving. Compare the results with the settings your hosting or email provider gave you; if a record is wrong, the fix happens at your registrar or DNS provider, not here. Changes also take time to propagate while servers worldwide cache old records, so re-check after a while. This is a server tool: the domain you enter is sent to query its records.",
    steps: [
      { title: "Enter the domain", description: "Type the domain you want to query, without a page path or email address." },
      { title: "Run the lookup", description: "The domain is sent to the server, which queries its current public DNS records." },
      { title: "Review the records", description: "Note which hosts and services the records point to — web, mail and verification." },
      { title: "Compare, fix, re-check", description: "Compare with your provider's expected settings, update anything wrong at your registrar or DNS provider, and look again after the change has had time to spread." },
    ],
    faqs: [
      { question: "Why does my updated record not show yet?", answer: "DNS changes take time to propagate, as servers around the world cache old records until they expire. Wait a while and check again, and make sure you updated the record at the provider that actually controls the domain's DNS." },
      { question: "Can a DNS lookup fix my website?", answer: "No, it only shows the current records. It helps you find the problem, but fixing it means editing the records at your registrar or DNS provider, then verifying the change with another lookup." },
      { question: "Is DNS information private?", answer: "No. DNS records are public by design, because any visitor's device needs them to reach the site or send mail. The tool only reports records that are already publicly available." },
    ],
  },
  "ip-lookup": {
    aboutText:
      "IP Lookup inspects the public geolocation and network information associated with an IP address — useful for troubleshooting a connection, making sense of visitor logs, or checking what your own public address reveals. The results describe the network, not the person using it: geolocation is an estimate tied to the network provider, usually at city or regional level, and it can be off when traffic passes through a VPN or a large provider network. It never reveals a name, home address or private subscriber data, so do not use it to try to identify an individual. This is a server tool: the address you enter is sent to complete the lookup.",
    steps: [
      { title: "Enter the IP address", description: "Type the public IP address you want to inspect." },
      { title: "Run the lookup", description: "The address is sent to the server, which retrieves its public geolocation and network details." },
      { title: "Read the estimate", description: "Check the approximate location and the network provider information shown." },
      { title: "Use it in context", description: "Compare the result with what you expected, use it to troubleshoot a connection or understand a log entry — and remember the location is an estimate, not a pinpoint." },
    ],
    faqs: [
      { question: "How accurate is IP geolocation?", answer: "It is an estimate, usually at city or regional level, based on the network provider's records. It can be inaccurate when an address is routed through a VPN, a corporate network, or a provider with a broad coverage area." },
      { question: "Can an IP lookup identify a person?", answer: "No. It reports public network information for the address, such as the provider and an approximate location. It does not reveal a name, a home address, or any private subscriber data." },
      { question: "Why does my own IP location look wrong?", answer: "Your traffic may be routed through a VPN, a work network, or a provider hub in another city. The lookup reports where the network registers the address, which is not always where you are sitting." },
    ],
  },
  "email-validator": {
    aboutText:
      "Email Validator checks an address for correct syntax and looks at the mail records for its domain, catching the single mistyped character that can send mail nowhere, block a signup or silently lose a customer. It is built for cleaning mailing lists, testing signup forms and double-checking addresses people give you. Validation is a helpful check, not a guarantee: a correctly formed address can still be unused, full, or behind a server that rejects outside checks, so a good result means the format and mail setup pass — not proof the mailbox exists or that mail will be delivered. This is a server tool: the address you enter is sent to complete the checks.",
    steps: [
      { title: "Enter the full address", description: "Type the complete email address you want to validate." },
      { title: "Run the validation", description: "The address is sent to the server, which checks its syntax and the mail records for its domain." },
      { title: "Read both results", description: "Check whether the format is valid and whether the domain is set up to receive mail." },
      { title: "Fix and repeat", description: "Correct any flagged typo and validate again. For a mailing list, work through it address by address — that pace also reveals patterns, like a repeated typo from one signup form." },
    ],
    faqs: [
      { question: "What does the Email Validator check?", answer: "It checks whether the address follows valid email syntax and whether its domain has mail records showing it is set up to receive email. Those two checks together catch most typos and misconfigured domains." },
      { question: "Does a valid result mean the mailbox exists?", answer: "No. A valid result means the format is correct and the domain can receive mail in principle. It does not prove that the specific mailbox exists, is active, or will accept your message." },
      { question: "Why did a real address fail validation?", answer: "The domain may have no public mail records, the address may contain an unusual character, or a temporary lookup issue may have occurred. Double-check the spelling, then try again before concluding the address is wrong." },
    ],
  },
  "meta-tag-generator": {
    aboutText:
      "Meta Tag Generator creates the title, meta, Open Graph and Twitter tags for a web page from the details you enter — clean, ready-to-paste code instead of hand-written tags where one missing quote can break the whole block. The title and description shape how your page appears in search results, while the Open Graph and Twitter tags control how it looks when shared on social media. Tags help search engines and platforms understand and display your page; they do not guarantee higher rankings. It runs entirely in your browser, so your page details never leave your device.",
    steps: [
      { title: "Enter your page details", description: "Add your page title, description and the other details the form asks for, such as the page URL." },
      { title: "Generate the tags", description: "The title, meta, Open Graph and Twitter tags are built locally in your browser." },
      { title: "Review for accuracy", description: "Check that the title reads naturally and the description matches the actual page content — misleading tags disappoint visitors." },
      { title: "Paste into your page head", description: "Copy the tags into the head section of your page, or your CMS's custom head code option, and update them whenever the page content changes." },
    ],
    faqs: [
      { question: "What are meta tags?", answer: "Meta tags are snippets of code in the head of a web page that describe the page. They include the title and description for search results, plus Open Graph and Twitter tags for social sharing." },
      { question: "Where do I paste the generated tags?", answer: "Paste them into the head section of your page HTML, before the closing head tag. If you use a site builder or CMS, look for its option to add custom head code." },
      { question: "Do meta tags guarantee higher rankings?", answer: "No. Meta tags help search engines and social platforms understand and display your page, but rankings also depend on content quality, links, and many other factors." },
    ],
  },
  "robots-txt-generator": {
    aboutText:
      "Robots.txt Generator builds a clean robots.txt file for your website — the small text file, placed at your domain's root, that tells search engine crawlers which parts of your site they may visit and which to leave alone, so they spend their time on content that matters instead of admin or duplicate sections. Double-check every disallow rule before saving: one wrong rule can hide pages you want found. And robots.txt is a request polite crawlers follow, not a security control — never rely on it to hide sensitive pages. It runs entirely in your browser.",
    steps: [
      { title: "Decide what crawlers may visit", description: "Work out which sections of your site should be crawlable and which should be left alone." },
      { title: "Enter the rules", description: "Add the allow and disallow rules for those sections. The file is built on your device." },
      { title: "Review every disallow rule", description: "Check the generated file carefully — one wrong rule can block search engines from important pages." },
      { title: "Save it at your root", description: "Save the file as robots.txt at the root of your domain (yourdomain.com/robots.txt), then test it to confirm crawlers can reach your important pages." },
    ],
    faqs: [
      { question: "What is a robots.txt file?", answer: "It is a text file placed at the root of a website that gives instructions to search engine crawlers about which pages and sections they may crawl." },
      { question: "Where do I put the robots.txt file?", answer: "Place it at the root of your domain, so it is available at yourdomain.com/robots.txt. Crawlers look for it there automatically." },
      { question: "Can robots.txt keep a page private?", answer: "No. It is a request that polite crawlers follow, not a security control. Do not rely on it to hide sensitive pages; use proper access controls for those." },
    ],
  },
  "sitemap-generator": {
    aboutText:
      "Sitemap Generator creates an XML sitemap from a list of URLs — the file that lists your pages so search engines can find and understand them more easily, including pages that are not well linked from elsewhere. Building one by hand is slow and error-prone beyond a handful of pages; the generator builds the list for you. Review the URLs before generating the final file and remove anything you do not want indexed, such as staging or duplicate pages, and regenerate after major site changes. A sitemap helps discovery; it does not guarantee ranking.",
    steps: [
      { title: "Provide your URLs", description: "Add the list of page URLs you want included in the sitemap." },
      { title: "Review the list", description: "Remove any pages you do not want indexed, such as staging or duplicate pages, before generating the final file." },
      { title: "Generate and download", description: "The finished sitemap file is built from your URL list, ready to use." },
      { title: "Submit it to search engines", description: "Place the sitemap on your site and submit it to the search engines you use; regenerate it after major changes so new pages are learned about promptly." },
    ],
    faqs: [
      { question: "What is a sitemap?", answer: "A sitemap is a file, usually in XML format, that lists the pages on a website. Search engines use it to discover pages and understand the structure of a site." },
      { question: "Does a sitemap guarantee my pages will rank?", answer: "No. A sitemap helps search engines find your pages, but ranking depends on content quality, links, and many other factors." },
      { question: "Which pages should I leave out of a sitemap?", answer: "Leave out staging, duplicate or private pages you do not want indexed. A sitemap should list the pages you actually want search engines to find and show." },
    ],
  },
  "keyword-density-checker": {
    aboutText:
      "Keyword Density Checker measures how often words and phrases appear in your pasted text, so you can see whether a term is used rarely, naturally, or so often it starts to look forced. The goal is not a magic percentage — there is no single ideal number — but a draft that reads naturally for readers while its topic is unmistakable. Use it as one editing signal alongside a careful read: a page can repeat one phrase often and still be thin on its topic, so check a few related terms too.",
    steps: [
      { title: "Paste your text", description: "Add the draft, article or page copy you want to check." },
      { title: "Run the analysis", description: "The checker measures how often your words and phrases appear in the text." },
      { title: "Read the results", description: "Look for terms that appear unusually often or rarely, and check a few related terms as well as the main one." },
      { title: "Edit and recheck", description: "Rewrite passages that repeat a phrase awkwardly, then run the check again to confirm the text reads naturally." },
    ],
    faqs: [
      { question: "What is keyword density?", answer: "Keyword density is how often a word or phrase appears in a text, usually shown as a share of all the words. It helps editors judge whether a term is used naturally or too often." },
      { question: "What is a good keyword density?", answer: "There is no single ideal number. Write naturally for readers first, and use the density result as a check for obvious overuse or missing topic terms, not as a target to hit exactly." },
      { question: "Why check related terms and not just the main keyword?", answer: "A page can repeat its main phrase while barely covering its topic. Checking related terms shows whether the text actually discusses the subject in depth or just repeats one phrase." },
    ],
  },
  "serp-preview-tool": {
    aboutText:
      "SERP Preview Tool shows how your page title and description will look in search results, the way a searcher would see them, before you publish — instead of guessing from a form field in your CMS. A title that gets cut off, or a description that ends mid-sentence, wastes the chance to earn a click, so put the important words early and compare a few versions. The preview is a realistic guide, not a promise: search engines may rewrite titles or descriptions, and the exact display can vary. It runs entirely in your browser.",
    steps: [
      { title: "Enter your title", description: "Type the title you plan to use for your page. It stays on your device." },
      { title: "Enter your description", description: "Add the meta description you plan to use alongside it." },
      { title: "Study the preview", description: "Shorten or rewrite anything that looks cut off or unclear, keeping the most important words near the start." },
      { title: "Keep the clearest version", description: "Compare a few versions, pick the one clearest to someone who has never seen your page, and copy it into your page or CMS." },
    ],
    faqs: [
      { question: "What is a SERP?", answer: "SERP stands for search engine results page. It is the page of results a search engine shows after someone searches, including the title, URL and description snippet for each result." },
      { question: "Why do titles and descriptions get cut off?", answer: "Search engines show only a limited width for titles and descriptions. Text longer than that space is truncated, so previewing helps you keep the important words visible." },
      { question: "Does the preview guarantee how my result will look?", answer: "No. Search engines may rewrite titles or descriptions, and the exact display can vary. The preview is a realistic guide, not a promise of the final result." },
    ],
  },
  "open-graph-generator": {
    aboutText:
      "Open Graph Generator creates the social meta tags for a page and previews the share card they produce — the title, description and image shown when someone shares your link on social media. A missing or wrong tag can leave a share with a blank image, a generic title or no description, which makes people less likely to click; seeing the card before you publish lets you fix that while it is still easy. This tool focuses on the social tags (the Meta Tag Generator covers title and regular meta tags too). It runs entirely in your browser.",
    steps: [
      { title: "Enter your page details", description: "Add your page title, description and page URL. Nothing is uploaded." },
      { title: "Add the share image", description: "Provide the image details for the share card if asked." },
      { title: "Generate and preview", description: "The Open Graph tags are built locally, and the preview card shows how the share will look — check it on a small screen too, since titles and images crop differently there." },
      { title: "Paste the tags into your head", description: "Copy the tags into the head section of your page, or your CMS's custom head code option, and update them when the page title or image changes." },
    ],
    faqs: [
      { question: "What are Open Graph tags?", answer: "Open Graph tags are meta tags that tell social platforms what title, description and image to show when a page is shared. They turn a plain link into a rich preview card." },
      { question: "How is this different from the Meta Tag Generator?", answer: "The Meta Tag Generator covers title, meta, Open Graph and Twitter tags together. This tool focuses on social meta tags and includes a preview of the share card itself." },
      { question: "Where do I paste the generated tags?", answer: "Paste them into the head section of your page HTML. If you use a CMS or site builder, use its option for custom head code." },
    ],
  },
  "canonical-tag-generator": {
    aboutText:
      "Canonical Tag Generator creates a canonical link tag for a page — the tag that tells search engines which URL is the preferred version when the same or similar content exists at more than one address, as happens with tracking parameters, print versions, sorting options or http and https variants. Without one, search engines must guess which version to show; pointing them to one preferred URL consolidates the signals for that page. Use the full absolute URL, exactly as you want it treated. It runs entirely in your browser.",
    steps: [
      { title: "Enter the preferred URL", description: "Type the canonical URL for your page — the full address, including https and your domain." },
      { title: "Generate the tag", description: "The canonical link tag is built locally in your browser." },
      { title: "Review it exactly", description: "Make sure the URL is precisely right before you copy anything." },
      { title: "Add it to every variant", description: "Paste the tag into the head of each duplicate or variant page, not just the preferred page itself — and recheck it after redesigns or migrations, which can introduce new duplicates." },
    ],
    faqs: [
      { question: "What is a canonical tag?", answer: "A canonical tag is a link element in the head of a page that names the preferred URL for that content. Search engines use it to choose one version when duplicates exist." },
      { question: "When do I need a canonical tag?", answer: "Use one when the same or very similar content is reachable at multiple URLs, such as versions with tracking parameters, sorting options, or http and https addresses." },
      { question: "Should the canonical URL be absolute?", answer: "Yes. Use the full URL, including https and your domain, exactly as you want search engines to treat the preferred version of the page." },
    ],
  },
  "schema-markup-generator": {
    aboutText:
      "Schema Markup Generator creates JSON-LD structured data for common content types from the details you enter — clean code you can paste into your page, instead of hand-written JSON-LD where one missing comma invalidates the whole block. Structured data describes your page in a way search engines can read, whether it is an article, a product, an event or something else. Fill in accurate details only: markup should describe what is actually on the page, and it makes content eligible for richer displays without guaranteeing them. It runs entirely in your browser.",
    steps: [
      { title: "Choose the content type", description: "Pick the common type that best matches your page." },
      { title: "Enter accurate details", description: "Add the title, description and other details the form asks for — only facts that are actually on the page." },
      { title: "Generate and review", description: "The JSON-LD markup is built locally; review it for accuracy before using it." },
      { title: "Validate, then paste", description: "Check the finished markup with a structured data testing tool to catch formatting mistakes, then paste it into the head or body of your page." },
    ],
    faqs: [
      { question: "What is JSON-LD schema markup?", answer: "JSON-LD is a format for structured data written as a script block on a page. It describes the page content in a structured way that search engines can read and understand." },
      { question: "Does schema markup guarantee rich results?", answer: "No. It helps search engines understand your page and makes your content eligible for richer displays, but search engines decide what to show for each result." },
      { question: "Which content types are supported?", answer: "The generator covers common types used by typical pages. Choose the type that best matches your page, and enter accurate details for it." },
    ],
  },
  "website-speed-test": {
    aboutText:
      "Website Speed Test checks the timing and speed metrics for a URL, turning a vague feeling that a site is slow into concrete figures you can act on. Slow pages frustrate visitors, hurt conversions and can affect search performance. Use it before and after a change — after compressing images or a redesign — to see whether the optimisation actually helped, and run it more than once, since a single run can be skewed by temporary network conditions. This is a server tool: the URL you enter is sent to the server to run the test, so avoid private or login-protected URLs.",
    steps: [
      { title: "Enter the page URL", description: "Type the full URL of the page you want to test. Avoid pages that require login." },
      { title: "Run the test", description: "The URL is sent to the server, which loads the page and collects its timing metrics." },
      { title: "Review the metrics", description: "Read the timing results, then run the test again to confirm they are typical, not a one-off network blip." },
      { title: "Fix the biggest problem first", description: "Start with the largest timing problem in the results, then retest to confirm the fix actually helped." },
    ],
    faqs: [
      { question: "What does the Website Speed Test measure?", answer: "It checks timing and speed metrics for a URL, showing how the page performs when loaded so you can judge whether it is fast or slow." },
      { question: "Why does website speed matter?", answer: "Slow pages frustrate visitors and can reduce conversions and search performance. Faster pages give visitors a better experience and are easier to keep." },
      { question: "How can I improve a slow result?", answer: "Common fixes include compressing images, reducing heavy scripts, and simplifying the page. Retest after each change to see whether the metrics improved." },
    ],
  },
  "broken-link-checker": {
    aboutText:
      "Broken Link Checker crawls a page and reports the links on it that no longer work — the dead ends that appear as pages move, sites close or URLs change. Broken links hurt twice: visitors hit error pages and lose trust, and search crawlers waste effort on dead paths. It checks one page at a time, so run it on each important page, starting with your most visited ones, then fix each dead link or remove it. This is a server tool: the page URL you enter is sent to the server to complete the crawl, so avoid login-protected or sensitive pages.",
    steps: [
      { title: "Enter the page URL", description: "Type the URL of the page you want to check. Avoid private pages that require login." },
      { title: "Start the crawl", description: "The URL is sent to the server, which follows the links on the page and tests them." },
      { title: "Review the report", description: "Read which links are broken, prioritising links on your most visited pages, where they affect the most people." },
      { title: "Fix and recheck", description: "Point each broken link at the correct current URL, or remove it if the content no longer exists, then recheck the page to confirm every replacement works." },
    ],
    faqs: [
      { question: "What is a broken link?", answer: "A broken link is a link that no longer leads to a working page, usually because the target page moved, was deleted, or the URL changed. Visitors following it hit an error instead of content." },
      { question: "Does the checker crawl my whole site?", answer: "It crawls a page and reports the broken links found on that page. To check other pages, run the checker on each page URL you want to review." },
      { question: "What should I do with a broken link?", answer: "Fix it by pointing it to the correct current URL, or remove it if the linked content no longer exists and has no good replacement." },
    ],
  },
  "json-validator": {
    aboutText:
      "JSON Validator checks whether your JSON follows the strict rules of the format and tells you exactly what is wrong when it does not — a missing comma, an unquoted key, a trailing comma or a single quote where a double quote belongs. Unlike a formatter, which is about readability, a validator is about correctness: is this JSON valid, and if not, where does it break? Paste the complete document, not a fragment. It runs entirely in your browser, so sensitive payloads and configuration data are checked privately on your device.",
    steps: [
      { title: "Paste the complete JSON", description: "Add the full document — an object, array or single value — not a fragment cut off at the start or end." },
      { title: "Run the validation", description: "The JSON is checked against the syntax rules locally in your browser." },
      { title: "Read the verdict", description: "If it is valid, copy or format it with confidence. If not, the error names the type of problem and its position." },
      { title: "Fix and re-validate", description: "Add the missing comma, close the string or remove the trailing comma, then validate again until it passes. Validation never changes your JSON." },
    ],
    faqs: [
      { question: "What counts as invalid JSON?", answer: "Common problems include missing commas, trailing commas, unquoted keys, single quotes instead of double quotes, and unbalanced braces or brackets. Any of these will make a strict JSON parser reject the document." },
      { question: "How is a validator different from a formatter?", answer: "A formatter rewrites valid JSON to make it readable. A validator checks whether JSON is valid at all and explains errors in detail. Use the validator when something is broken; use the formatter when it works but is hard to read." },
      { question: "Can I validate a fragment of JSON?", answer: "A validator expects a complete JSON document — an object, an array, or a single value. A fragment with missing braces will be reported as invalid, so paste the full document for an accurate result." },
    ],
  },
  "json-minifier": {
    aboutText:
      "JSON Minifier strips every unnecessary character from JSON — spaces, line breaks and indentation — and compresses it into the smallest valid form, usually a single line. The data stays exactly the same; only the file gets smaller, which suits API payloads, embedded configuration and storage. Minifying is the reverse of formatting: pretty-printed JSON is for reading, minified JSON is for moving. Keep the readable original as your working copy. It runs entirely in your browser, so payloads and config data stay private.",
    steps: [
      { title: "Paste your JSON", description: "Add formatted or pretty-printed JSON. Confirm it is complete and valid first, since minification needs well-formed JSON." },
      { title: "Run the minifier", description: "All unnecessary whitespace is removed and the JSON collapses into compact form, on your device." },
      { title: "Check the saving", description: "Compare the original and minified sizes to see how much was saved." },
      { title: "Copy the compact JSON", description: "Use it in your API request, configuration or storage. To read or edit it later, paste it into the JSON Formatter to expand it again." },
    ],
    faqs: [
      { question: "Does minifying JSON change the data?", answer: "No. Minification only removes whitespace characters — spaces, tabs and line breaks — that JSON parsers ignore. The keys, values and structure remain exactly the same." },
      { question: "How much smaller does minified JSON get?", answer: "It depends on how much indentation the original had. Deeply nested, heavily indented JSON can shrink by 20 to 40 percent, while already compact JSON shrinks very little." },
      { question: "Is minified JSON still valid JSON?", answer: "Yes. Minified JSON is fully valid and any JSON parser will read it exactly like the formatted version. It is simply harder for humans to read, which is why you keep a formatted copy for editing." },
    ],
  },
  "xml-formatter": {
    aboutText:
      "XML Formatter takes dense or single-line XML — from APIs, SOAP services, RSS feeds, sitemaps or config files — and rewrites it with consistent indentation, so elements, attributes and text content form a clear tree you can follow. Formatting changes only whitespace and line breaks; it does not rename elements, alter attributes or change text values, so the document carries exactly the same information. If the XML will not format, it is usually not well-formed — a missing closing tag or an unescaped character. It runs entirely in your browser.",
    steps: [
      { title: "Paste your XML", description: "Add the document with its root element, and check the tags look balanced before formatting." },
      { title: "Run the formatter", description: "The XML is rewritten locally with consistent indentation for each nesting level." },
      { title: "Read the tree", description: "Use the indentation to follow parent and child elements. If an error appears, note the position, fix the structure and format again." },
      { title: "Copy the formatted XML", description: "Paste it into your editor, documentation or support ticket — and edit an element or attribute in the output first if you need to test a change." },
    ],
    faqs: [
      { question: "What does an XML formatter change?", answer: "Only whitespace: indentation and line breaks between elements. Element names, attributes and text content stay exactly as they were in the original document." },
      { question: "Can I format XML with a declaration and comments?", answer: "Yes. The XML declaration at the top of a document and comments inside it are preserved by formatting; only their placement and indentation are tidied up." },
      { question: "What if my XML will not format?", answer: "That usually means the XML is not well-formed — for example, a missing closing tag or an unescaped special character. Fix the reported problem and format again." },
    ],
  },
  "xml-validator": {
    aboutText:
      "XML Validator checks whether an XML document is well-formed: every opening tag matched by a closing tag, elements nested correctly, attribute values quoted and special characters handled properly. XML parsers are strict — unlike HTML, a single mistake makes the whole document unreadable, which is why a broken feed or rejected service request is so often malformed XML. Note the scope: this checks well-formedness (syntax), not validation against a schema or DTD. It runs entirely in your browser, so config files and payloads stay private.",
    steps: [
      { title: "Paste the complete document", description: "Add the whole XML — a partial document, cut off at either end, will fail validation." },
      { title: "Run the validation", description: "The document is checked for well-formedness locally in your browser." },
      { title: "Read the result", description: "If it is well-formed, XML syntax is ruled out as your problem. If not, the error points at the fault and the element involved." },
      { title: "Fix and repeat", description: "Close the unclosed tag, quote the attribute or escape the character, then validate again until the document passes." },
    ],
    faqs: [
      { question: "What does well-formed XML mean?", answer: "It means the document follows basic XML syntax rules: one root element, matched opening and closing tags, correctly nested elements, quoted attribute values, and properly escaped special characters." },
      { question: "Is well-formed the same as valid against a schema?", answer: "No. Well-formedness is about syntax only. Schema validation additionally checks that elements and values match a defined schema or DTD. This tool checks well-formedness, which is the essential first step." },
      { question: "What are the most common XML errors?", answer: "Unclosed tags, overlapping elements, unquoted attributes, and unescaped characters like a bare ampersand in text. The validator reports these so you can fix them one at a time." },
    ],
  },
  "html-formatter": {
    aboutText:
      "HTML Formatter takes cramped or minified HTML — copied from a live website, a generated template or a bundle — and rewrites it with consistent indentation, so nested divs, lists, tables and sections become easy to follow. Formatting changes only whitespace and line breaks between tags: tag names, attributes and text content are untouched, so the page renders exactly the same afterwards. It does not repair broken markup — fix structural problems first, then format. It runs entirely in your browser; fragments and single components format just as well as full pages.",
    steps: [
      { title: "Paste your HTML", description: "Add the full snippet, including opening and closing tags for the elements you care about." },
      { title: "Run the formatter", description: "The markup is rewritten locally with consistent indentation for each nesting level." },
      { title: "Read the structure", description: "Follow the document from parent to child elements; compare against the original if something looks off and you suspect a misplaced tag." },
      { title: "Copy the beautified HTML", description: "Paste it into your editor, document or code review — editing classes, text or structure in the readable output first if needed." },
    ],
    faqs: [
      { question: "Will formatting HTML change how my page looks?", answer: "No. Formatting only adjusts whitespace between tags. Browsers ignore most of that whitespace when rendering, so the page will look and behave exactly as before." },
      { question: "Can I format a fragment instead of a full page?", answer: "Yes. You can format a single section, a component, or a snippet. Formatting works on whatever markup you paste, whether it is a full document or part of one." },
      { question: "Does the formatter fix broken HTML?", answer: "No. It tidies whitespace and indentation but does not repair missing tags or invalid markup. Fix structural problems first, then format for readability." },
    ],
  },
  "html-minifier": {
    aboutText:
      "HTML Minifier removes unnecessary characters from HTML markup — extra whitespace, line breaks, indentation and comments — and produces a compact version that browsers render identically, so pages download faster and use less bandwidth. It is a final polish step for production templates, HTML emails and generated markup. Minification is one-way in practice: the compact output is hard to read, so keep your formatted original as the version you edit and minify a fresh copy whenever you deploy. It runs entirely in your browser.",
    steps: [
      { title: "Paste your HTML", description: "Add the markup you want to compress. Remove draft comments you do not want shipped first, if they are still present." },
      { title: "Run the minifier", description: "Whitespace and comments are stripped locally and the markup collapses into compact form." },
      { title: "Compare and test", description: "Check how much the page shrank, then test the minified HTML in a browser to confirm it renders exactly as before." },
      { title: "Copy for deployment", description: "Use the compact output for deployment, embedding or sending — and re-minify after any future change to the original." },
    ],
    faqs: [
      { question: "Will minified HTML still display correctly?", answer: "Yes. Minification only removes characters that do not affect rendering, such as extra whitespace and comments. The tags, attributes and content that define the page stay intact." },
      { question: "How much smaller does HTML get when minified?", answer: "It depends on how much indentation and commenting the original contains. Heavily indented templates often shrink by 10 to 30 percent; already compact markup shrinks less." },
      { question: "Is minifying the same as compressing with gzip?", answer: "No, but they complement each other. Minification removes unnecessary characters first, and server compression like gzip then compresses the smaller file even further." },
    ],
  },
  "css-minifier": {
    aboutText:
      "CSS Minifier compresses a stylesheet by removing whitespace, line breaks, indentation and comments, and shortening values where it is safe to do so — producing a much smaller file that browsers interpret identically, for faster first paints and less bandwidth. Minified CSS is not meant to be edited: keep your readable source, change that, and generate a fresh minified version for deployment. One caution: minifiers generally remove comments, so preserve any license notice separately if you must keep one. It runs entirely in your browser.",
    steps: [
      { title: "Paste your stylesheet", description: "Add complete, working CSS — minification preserves behaviour rather than fixing errors." },
      { title: "Run the minifier", description: "Unnecessary whitespace, line breaks and comments are stripped locally on your device." },
      { title: "Check and test", description: "Confirm the output is significantly smaller, then test the minified stylesheet in a browser to be sure the page still looks exactly right." },
      { title: "Ship the compact CSS", description: "Link it from your production page or paste it where needed, and re-minify after any future edits to the source." },
    ],
    faqs: [
      { question: "Will minified CSS style my page the same way?", answer: "Yes. Minification only removes characters that do not affect how browsers interpret the rules. Selectors, properties and values that define the design stay unchanged." },
      { question: "Does minifying remove all comments?", answer: "Minifiers generally remove comments because browsers do not need them. If a comment carries a license notice you must keep, preserve it separately in your source or documentation." },
      { question: "Should I minify CSS during development?", answer: "No. Keep CSS readable while you are building and debugging, and minify only for production or distribution, where size and speed matter most." },
    ],
  },
  "javascript-minifier": {
    aboutText:
      "JavaScript Minifier shrinks JavaScript by removing whitespace, line breaks, indentation and comments, producing a compact script that runs exactly like the original — smaller downloads and faster parsing, especially on mobile networks. The compact output is a delivery artifact, not a working copy: develop and debug the readable original, then minify a copy for release and re-minify whenever the original changes. And minified is not hidden: the code is still readable to anyone determined, so never put secrets in client-side JavaScript. It runs entirely in your browser.",
    steps: [
      { title: "Paste your script", description: "Add JavaScript that already works correctly — minification preserves behaviour rather than fixing bugs." },
      { title: "Run the minifier", description: "Whitespace, line breaks and comments are removed locally in your browser." },
      { title: "Check and test", description: "See how much smaller the output is, then test the minified script in a browser to confirm it runs exactly as before." },
      { title: "Copy for release", description: "Use the compact code for deployment, embedding or distribution, and re-minify after future changes to the source." },
    ],
    faqs: [
      { question: "Will minified JavaScript run the same as the original?", answer: "Yes. Minification only removes characters that do not affect execution, such as whitespace and comments. The logic, functions and values remain the same." },
      { question: "Does minifying JavaScript hide my code?", answer: "No. Minified code is compact but still fully readable to anyone determined to read it. It is a size optimization, not a security measure — never put secrets in client-side JavaScript." },
      { question: "How much smaller does JavaScript get?", answer: "It varies with formatting and comments. Well-commented, generously spaced code often shrinks by 20 to 40 percent; already compact code shrinks less." },
    ],
  },
  "sql-formatter": {
    aboutText:
      "SQL Formatter takes a query written as one long, dense string — generated by an application, copied from a log or built by an ORM — and rewrites it with line breaks and indentation that reveal its structure: SELECT columns on their own lines, FROM and JOIN clauses separated, WHERE conditions grouped. Formatting changes only the layout, never the meaning, so a formatted query returns identical results — it is simply far easier to verify, explain and edit, and less likely to hide a logic error. It runs entirely in your browser, so table names and query logic stay private.",
    steps: [
      { title: "Paste your query", description: "Add the complete query, including its SELECT list and FROM clause. It stays on your device." },
      { title: "Run the formatter", description: "The query is rewritten locally with consistent indentation and clause separation." },
      { title: "Read it clause by clause", description: "Check joins, filters and grouping as you go; if you spot a logic problem, edit the condition directly in the formatted output." },
      { title: "Verify and copy", description: "Test the edited query against your database before production use, then copy the formatted SQL into your editor, report or runbook." },
    ],
    faqs: [
      { question: "Will formatting change what my query returns?", answer: "No. Formatting only adjusts whitespace and line breaks. The tables, columns, filters and ordering are unchanged, so the results are identical." },
      { question: "Can I format queries from any database?", answer: "The formatter handles standard SQL structure — SELECT, FROM, JOIN, WHERE, GROUP BY and ORDER BY — which is shared across most databases. Dialect-specific syntax is preserved as written." },
      { question: "Does the formatter fix SQL errors?", answer: "No. It improves readability but does not correct syntax or logic mistakes. Use it to spot problems more easily, then fix them yourself and test the query." },
    ],
  },
  "base64-encoder": {
    aboutText:
      "Base64 Encoder converts text or file contents into Base64 — a text-safe encoding using only letters, digits and a few symbols — so binary data can travel through systems built for plain text: email bodies, JSON payloads, URLs, data URIs and configuration files. The important distinction: encoding is not encryption. Anyone holding the Base64 string can decode it back, so never treat it as a way to hide secrets — its purpose is safe transport and storage. It runs entirely in your browser, and the equals signs at the end of some outputs are normal padding.",
    steps: [
      { title: "Enter text or choose a file", description: "Type or paste the text you want to encode, or choose a file where the tool supports file input. Double-check it — a small typo produces a different string." },
      { title: "Run the encoder", description: "The input is converted into its Base64 representation locally on your device." },
      { title: "Review the output", description: "Confirm it contains only Base64 characters and ends with padding if the length requires it." },
      { title: "Copy and verify", description: "Use the encoded string in your API request, data URI, email or configuration. To verify, decode it back and confirm it returns your original input." },
    ],
    faqs: [
      { question: "What is Base64 encoding used for?", answer: "It converts binary or special-character data into plain text so it can travel safely through systems built for text, such as email, JSON payloads, and data URIs for embedded images." },
      { question: "Is Base64 encoding the same as encryption?", answer: "No. Encoding is reversible by anyone and provides no secrecy at all. Encryption requires a key and is designed to keep data private; Base64 only changes its representation." },
      { question: "Why does Base64 output sometimes end with equals signs?", answer: "Those are padding characters. Base64 works in groups of three bytes, so when the input length is not a multiple of three, padding fills the final group to keep the output well-formed." },
    ],
  },
  "base64-decoder": {
    aboutText:
      "Base64 Decoder reverses Base64 encoding, turning an encoded string back into the original text or file contents — the way to see what a string in an API response, email attachment, data URI or configuration value actually contains. Decoding only works on valid Base64: a string with missing padding, stray characters or a truncated copy will fail or produce garbled output, so a decoding error usually means the string was copied incompletely. It runs entirely in your browser. And remember, decoding reveals whatever was encoded — handle credential-bearing results as sensitive.",
    steps: [
      { title: "Paste the Base64 string", description: "Add the complete string, including any equals-sign padding at the end." },
      { title: "Run the decoder", description: "The string is converted back into its original form locally on your device." },
      { title: "Read or save the result", description: "Read the decoded text, or save it as a file if the original content was a file such as an image." },
      { title: "Verify before using", description: "Confirm the output matches what you expected. If decoding failed, re-copy the complete string cleanly and try again." },
    ],
    faqs: [
      { question: "Why does my Base64 string fail to decode?", answer: "The most common causes are a truncated copy, missing padding characters, or extra characters picked up during copying. Re-copy the complete string, including trailing equals signs, and try again." },
      { question: "Can I decode Base64 into a file?", answer: "Yes. If the original content was a file — such as an image — decoding recovers its bytes, which you can save as a file again. Text content decodes directly to readable text." },
      { question: "Does decoding reveal secrets safely?", answer: "Decoding reveals whatever was encoded, which is exactly why Base64 is not a security measure. If you decode a string containing credentials, treat the result as sensitive and handle it accordingly." },
    ],
  },
  "url-encoder": {
    aboutText:
      "URL Encoder converts characters that are unsafe or ambiguous in a URL — spaces, ampersands, question marks, non-English letters and symbols — into percent-encoded sequences like %20, so a value survives browsers, servers and APIs without being misinterpreted or splitting the URL's structure. Encode individual parameter values, not the whole address: encoding an entire URL would also encode its slashes and colons, which are structural. It runs entirely in your browser, so links and parameter values stay private.",
    steps: [
      { title: "Paste the value", description: "Add the text or parameter value you want to encode — a search term, a file name, user input. It stays on your device." },
      { title: "Run the encoder", description: "Unsafe characters are replaced with their percent-encoded equivalents locally in your browser." },
      { title: "Review the output", description: "Confirm spaces, ampersands and special characters have been converted." },
      { title: "Insert and test", description: "Put the encoded value into your query string, link or API request in place of the raw text, then test the URL to confirm the server receives the intended value." },
    ],
    faqs: [
      { question: "What characters get URL encoded?", answer: "Characters that have special meaning in URLs — such as spaces, ampersands, question marks and hashes — plus non-ASCII characters and symbols that are not safe in a URL. Safe characters like letters, digits and hyphens are left alone." },
      { question: "Should I encode a whole URL or just its values?", answer: "Usually just the values. Encoding a whole URL would also encode its slashes, colons and question marks, which would break its structure. Encode each query value separately and assemble the URL from the encoded parts." },
      { question: "What does %20 mean in a URL?", answer: "It is the percent-encoded form of a space. Encoding replaces each unsafe character with a percent sign followed by two hexadecimal digits representing that character." },
    ],
  },
  "url-decoder": {
    aboutText:
      "URL Decoder reverses percent-encoding, turning sequences like %20 and %26 back into the spaces, ampersands and other characters they represent, so an encoded URL from an analytics link, search result or API log becomes human-readable. Read the output in context: a decoded value can itself contain characters that look like URL structure, and the encoded version is still the one to use in actual links — the decoded form is for reading, debugging and documentation. It runs entirely in your browser, so links and their parameters stay private.",
    steps: [
      { title: "Paste the encoded URL or value", description: "Add the complete string, including all percent-encoded sequences. It is decoded on your device." },
      { title: "Run the decoder", description: "Percent-encoded sequences are converted back into their original characters." },
      { title: "Read the output", description: "Confirm it matches the value you expected. If encoded sequences remain, the value may have been double-encoded — decode again only if you know it was." },
      { title: "Use it for inspection", description: "Use the decoded value for debugging or documentation, and keep the encoded version for actual use in links." },
    ],
    faqs: [
      { question: "Why do some URLs look full of percent signs?", answer: "Because their values contained spaces, special characters or non-English text that had to be encoded for safe transport. Decoding restores the original characters for reading." },
      { question: "What is double encoding?", answer: "It happens when an already encoded value is encoded a second time, so a percent sign itself becomes %25. Decoding once then reveals the single-encoded form; decoding again reveals the original — but only decode twice if you know the value was encoded twice." },
      { question: "Can I click a decoded URL directly?", answer: "Usually you should use the encoded version for clicking, since browsers expect encoded values. The decoded version is for reading and inspection, not for navigation." },
    ],
  },
  "jwt-decoder": {
    aboutText:
      "JWT Decoder takes a JSON Web Token — the three dot-separated parts you see in Authorization headers — and decodes its header and payload into readable JSON, so you can see what a token claims: who it was issued to, when it expires, its issuer, audience and roles. That is often the fastest way to understand an unauthorized error. The important limit: this decoder displays a token, it does not verify its signature — a decoded payload proves only what the token claims, never that it is genuine. It runs entirely in your browser and never uploads the token, but treat tokens as sensitive anyway and prefer test tokens.",
    steps: [
      { title: "Paste the complete token", description: "Add all three dot-separated parts, with no extra spaces or line breaks." },
      { title: "Run the decoder", description: "The token is split and its header and payload are decoded into readable JSON, locally on your device." },
      { title: "Read header and payload", description: "Check the signing algorithm and type in the header, then subject, expiry, issued-at, issuer and audience in the payload." },
      { title: "Act on what you find", description: "Compare the expiry with the current time if you are chasing an unauthorized error, then adjust your login flow or token request — remembering decoding alone does not prove a token is valid." },
    ],
    faqs: [
      { question: "What are the three parts of a JWT?", answer: "A header describing the token type and signing algorithm, a payload carrying claims such as subject and expiry, and a signature that lets the issuer verify the token. The decoder displays the header and payload; it does not verify the signature." },
      { question: "Does decoding a JWT prove it is valid?", answer: "No. Decoding only shows what the token claims. A token can be decoded even if its signature is forged or it has expired. Only the server, using the signing key, can verify that a token is genuine and acceptable." },
      { question: "Why did my API reject a token that decodes fine?", answer: "Common reasons are an expired token, a wrong audience or issuer, a missing required role, or a signature the server cannot verify. The decoded payload usually points at the first three; signature problems need backend investigation." },
    ],
  },
  "uuid-generator": {
    aboutText:
      "UUID Generator creates universally unique identifiers — the familiar 36-character strings like 550e8400-e29b-41d4-a716-446655440000 — in bulk, for database primary keys, test data, upload filenames, correlation IDs and seeds, without a central registry or a script. The chance of two independently generated UUIDs colliding is negligible, which is why they are trusted as unique keys across distributed systems. UUIDs are identifiers, not secrets: they label your data and should never be used as a password or API key on their own. Generation runs entirely in your browser.",
    steps: [
      { title: "Choose how many you need", description: "One identifier for a single record, or a bulk batch for a test data set." },
      { title: "Select version or format if offered", description: "Pick the UUID version or format your system requires, if you have a specific one." },
      { title: "Generate and review", description: "Check the list for the count and format you expected — generation happens locally on your device." },
      { title: "Copy and use", description: "Copy a single UUID or the whole list into your seed file, test data, configuration or code. Generate a fresh batch later rather than reusing old ones." },
    ],
    faqs: [
      { question: "What is a UUID used for?", answer: "It uniquely identifies a record, file, session or object — commonly as a primary key in a database, an upload filename, a request correlation ID, or a test fixture identifier — without needing a central authority to hand out numbers." },
      { question: "Can two UUIDs ever be the same?", answer: "In practice, no. Random UUIDs draw from such a vast range that the chance of a collision is vanishingly small, even across billions of generated values from different systems." },
      { question: "Is a UUID a password or secret?", answer: "No. A UUID is an identifier, not a credential. Some UUID versions are random, but they are not designed as secure secrets, so never use one as a password or an API key on its own." },
    ],
  },
  "hash-generator": {
    aboutText:
      "Hash Generator computes a hash digest — a fixed-length fingerprint — for a piece of text or a file. The same input always produces the same digest, and changing even one character changes the digest completely, which makes hashes the standard way to verify integrity: hash your copy and compare it with the publisher's digest. Hashing is not encryption — a digest cannot be reversed into the original data — and algorithm choice matters: SHA-256 is the safe default for integrity, while MD5 suits only non-security checksums. It runs entirely in your browser, so the data you fingerprint stays private.",
    steps: [
      { title: "Enter text or choose a file", description: "Add the input you want to fingerprint. It is hashed on your own device, never uploaded." },
      { title: "Select the algorithm", description: "Choose the hash algorithm your purpose needs, where the tool offers more than one." },
      { title: "Generate the digest", description: "Review the fixed-length output for the chosen algorithm." },
      { title: "Compare character by character", description: "If the digests match, the data is identical to the version that produced the published digest. If they differ, treat the data as changed or corrupted and obtain a fresh copy." },
    ],
    faqs: [
      { question: "What is a hash digest?", answer: "It is a fixed-length string computed from input data, acting as a fingerprint. The same input always produces the same digest, while any change to the input produces a completely different one." },
      { question: "Is hashing the same as encryption?", answer: "No. Encryption is reversible with a key and is meant to hide data. Hashing is one-way: you cannot recover the original input from a digest, and hashing alone does not keep input secret if the input is guessable." },
      { question: "Which hash algorithm should I choose?", answer: "For verifying downloads and file integrity, a modern algorithm like SHA-256 is the safe default. Older algorithms such as MD5 are fine for non-security checksums but should not be relied on where tampering is a concern." },
    ],
  },
  "md5-generator": {
    aboutText:
      "MD5 Generator computes the MD5 digest of text or a file: a 32-character hexadecimal fingerprint, the checksum long published alongside downloads and still found in old documentation, export manifests and support threads. The same input always produces the same digest, and one changed character produces a completely different one. The honest limit: MD5 is cryptographically broken — attackers can craft different inputs with the same digest — so use it only for casual, non-security comparisons, and choose SHA-256 where tampering is a real concern or for anything password-related. It runs entirely in your browser.",
    steps: [
      { title: "Enter text or choose a file", description: "Add the input you want to hash, and double-check it — any extra space produces a different digest." },
      { title: "Generate the digest", description: "The 32-character hexadecimal MD5 output is computed locally on your device." },
      { title: "Copy the digest", description: "Take the digest for comparison with the published or expected MD5 value." },
      { title: "Compare and judge", description: "Matching digests mean identical copies for practical checksum purposes. Differing digests mean changed data — obtain a fresh copy before relying on it." },
    ],
    faqs: [
      { question: "Is MD5 secure?", answer: "No, not for security purposes. MD5 is vulnerable to collision attacks, so an attacker can craft different data with the same digest. Use it only for casual integrity checks, and choose SHA-256 when tampering is a real concern." },
      { question: "Can I recover the original text from an MD5 hash?", answer: "No. MD5 is one-way: the digest cannot be reversed into the input. Short, common inputs can be guessed by trying candidates, which is another reason MD5 must never be used to store passwords." },
      { question: "How is MD5 different from SHA-256?", answer: "Both produce fixed-length digests, but SHA-256 produces a longer 64-character digest and remains cryptographically strong, while MD5 produces a shorter 32-character digest and is broken for security use. For new work, prefer SHA-256." },
    ],
  },
  "sha256-generator": {
    aboutText:
      "SHA-256 Generator computes the SHA-256 digest of text or a file: a 64-character hexadecimal fingerprint from the SHA-2 family — the checksum published alongside software releases, container images and data exports today, because it has withstood years of cryptographic scrutiny. When your computed digest matches the publisher's exactly, you have strong evidence your copy is byte-for-byte identical. SHA-256 is hashing, not encryption, and not password storage on its own: a digest cannot be reversed, but short or predictable inputs can still be guessed by trying candidates. It runs entirely in your browser.",
    steps: [
      { title: "Enter text or choose a file", description: "Add the input you want to hash, checked carefully — any added space or altered character changes the digest entirely." },
      { title: "Generate the digest", description: "The 64-character hexadecimal SHA-256 output is computed locally on your device." },
      { title: "Copy the digest", description: "Take it for comparison with the published or expected SHA-256 value." },
      { title: "Compare exactly", description: "A single differing character means the data differs — re-download from the trusted source and verify again. An exact match means you can rely on the copy." },
    ],
    faqs: [
      { question: "Why is SHA-256 preferred over MD5?", answer: "MD5 is broken for security use because collisions can be crafted deliberately. SHA-256 remains cryptographically strong, so matching digests provide trustworthy evidence that data is unchanged." },
      { question: "Can SHA-256 be reversed to reveal my data?", answer: "No. SHA-256 is one-way, so a digest cannot be turned back into the input. However, if the input is short or predictable, an attacker can guess it by hashing candidates, so never use a plain digest as password storage." },
      { question: "What should I do if the digests do not match?", answer: "Treat the data as different or corrupted. Re-download it from the trusted source, check for transmission errors, and verify again before using it in production." },
    ],
  },
  "case-converter": {
    aboutText:
      "Case Converter switches text between common casing styles — upper case, lower case, title case and sentence case — in seconds, instead of retyping a heading or a whole caps-lock paragraph by hand. It only changes the casing of letters: your wording, punctuation and line breaks stay exactly as you wrote them. One thing to check in the output: proper names, acronyms and brand names, because automatic casing cannot know which words should stay capitalised. It runs entirely in your browser, so drafts never leave your device.",
    steps: [
      { title: "Paste your text", description: "Type or paste the heading, title or block of text you want to change. It stays on your device." },
      { title: "Pick a casing style", description: "Choose upper, lower, title or sentence case to fit where the text will be used." },
      { title: "Review the output", description: "Check proper names, acronyms and brand names and fix any that should stay capitalised." },
      { title: "Copy the result", description: "Paste the converted text into your document, email or post. Convert again in another style anytime — it takes a moment." },
    ],
    faqs: [
      { question: "What casing styles can I convert text between?", answer: "The tool switches text between common casing styles, including upper case, lower case, title case and sentence case. Pick the style that fits where the text will be used." },
      { question: "Will converting case change my words or punctuation?", answer: "No. The converter only changes the casing of letters. Your words, numbers, punctuation and spacing stay the same unless you edit them yourself." },
      { question: "Can I convert a long document at once?", answer: "Yes. You can paste a large block of text and convert it in one go, then review the output before copying it into your document." },
      { question: "How do I convert uppercase text to lowercase?", answer: "Paste the all-caps text, choose lower case, and copy the result. It is the quick fix for a paragraph typed with caps lock on, or a heading pasted in from a source that was all uppercase — just review proper names and acronyms afterwards, since automatic casing cannot know which words should stay capitalised." },
      { question: "What is title case and when should I use it?", answer: "Title case capitalises the first letter of each word, which is the usual style for headings, book titles and article titles. Convert the text, then fix any small words your style guide keeps lowercase, such as and, of or the, and any brand name with its own capitalisation." },
      { question: "Can I fix text I typed with caps lock on by mistake?", answer: "Yes. Paste the text and convert it to sentence case for ordinary paragraphs, or lower case if you want to re-capitalise by hand. Sentence case capitalises the first word of each sentence and leaves the rest lowercase, which is usually the closest to what you meant to type." },
      { question: "Does converting case change my line breaks or spacing?", answer: "No. Only the casing of letters changes — your words, numbers, punctuation, spacing and line breaks stay exactly as you wrote them. If the spacing itself is messy, the Remove Extra Spaces tool handles that separately." },
    ],
  },
  "character-counter": {
    aboutText:
      "Character Counter counts the characters in your text two ways — with spaces and without spaces — because platforms and forms count length differently, and a text that fits one limit can fail the other. It is built for social media bios, captions, form fields, meta descriptions and headlines with strict limits: paste your text, see both counts side by side, and edit while watching the count fall in real time. It runs entirely in your browser, so unpublished writing stays on your device.",
    steps: [
      { title: "Paste or type your text", description: "Add the bio, caption, headline or field answer you are checking. Nothing is uploaded." },
      { title: "Read both counts", description: "See the character count including spaces and the count excluding spaces, side by side." },
      { title: "Compare with your limit", description: "Check both numbers against the platform or form limit you are writing for, since each may count spaces differently." },
      { title: "Edit until it fits", description: "Shorten a phrase or remove a filler word, recheck, then copy the final text once it fits." },
    ],
    faqs: [
      { question: "What is the difference between the two character counts?", answer: "The count with spaces includes every space between words. The count without spaces leaves those spaces out. Some platforms count one way and some the other, so seeing both avoids surprises." },
      { question: "Why would I need a character count instead of a word count?", answer: "Many fields limit characters, not words. A short bio, a headline or a form answer can be within a word limit but over a character limit, and this tool checks the exact number that matters." },
      { question: "Do line breaks count as characters?", answer: "Line breaks are part of the text you paste, so they can affect the count depending on how the tool treats them. Check the displayed counts after pasting to see the result for your exact text." },
      { question: "How many characters can a post on X (Twitter) have?", answer: "A standard post on X allows 280 characters, and spaces count toward that limit. Paste your draft here and compare both counts — with spaces and without — against 280 before posting, so a post that looks short is not rejected for being a few characters over." },
      { question: "Do spaces count toward a character limit?", answer: "It depends on the platform or form — some count spaces and some do not, which is why this tool shows both numbers side by side. Always compare the count that matches your platform's rule, and when in doubt use the count including spaces, since it is the stricter of the two." },
      { question: "How many characters should a meta description be?", answer: "Search engines typically show around 155 to 160 characters of a meta description, and anything longer gets cut off with an ellipsis. Write your description, paste it here, and trim it until the count including spaces sits under that range, with the most important words near the start." },
      { question: "Can I check the length of a whole article at once?", answer: "Yes. Paste the full text and both counts update live as you edit, so you can shorten a phrase or remove a filler word and watch the number fall in real time. For a long document, check section by section if different parts have different limits." },
    ],
  },
  "sentence-counter": {
    aboutText:
      "Sentence Counter counts the sentences in your text and works out the average sentence length — a quick structural view that is hard to judge by eye in a long draft. Long sentences can be hard to follow while a run of very short ones feels choppy, and a rising average across revisions can signal writing that is getting harder to read rather than better. It runs entirely in your browser, so essays, student work and unpublished drafts stay private on your device.",
    steps: [
      { title: "Paste your text", description: "Add the essay, article or draft you want to analyse. It never leaves your device." },
      { title: "Read the count and average", description: "See the total number of sentences and the average sentence length beside it." },
      { title: "Spot the extremes", description: "Look for sections where sentences run unusually long or short, or where the average jumps — one overlong sentence can drag down a whole paragraph." },
      { title: "Edit and recheck", description: "Split the longest sentences and join very short ones, then check the count again to see how the balance changed." },
    ],
    faqs: [
      { question: "What does the Sentence Counter measure?", answer: "It counts the sentences in your text and calculates the average sentence length, giving you a simple overview of how your writing is structured." },
      { question: "What is a good average sentence length?", answer: "There is no single right answer, since it depends on the audience and the subject. As a guide, plain English writing often averages around 15 to 20 words per sentence, with longer sentences used sparingly." },
      { question: "How are sentences detected?", answer: "Sentences are split at the usual sentence-ending punctuation in your text. Abbreviations and unusual punctuation can affect the count, so review the result alongside your draft." },
      { question: "Do abbreviations like Dr. or e.g. confuse the sentence count?", answer: "They can. Sentences are split at the usual sentence-ending punctuation, and an abbreviation ending in a full stop can look like the end of a sentence. If your count looks too high, scan for abbreviations and remember the number is a guide — read the draft alongside it rather than trusting the count alone." },
      { question: "Can a high average sentence length mean my writing is hard to read?", answer: "Often, yes. Long sentences are harder to follow, and a rising average across revisions can signal writing that is getting harder to read rather than better. Use the average as a prompt to split the longest sentences, then recheck to see how the balance changed." },
      { question: "What is the difference between a sentence count and a word count?", answer: "A word count measures length; a sentence count measures structure. Two drafts can have the same word count but feel very different — one built from short, punchy sentences and one from long, winding ones. Check both numbers together to judge whether a draft is the right length and reads well." },
      { question: "Can I use the Sentence Counter on an essay before submitting it?", answer: "Yes. Paste the essay, read the total and the average sentence length, then look for sections where sentences run unusually long or short. Split the longest sentences and join very short ones, then check the count again to see how the balance changed before you submit." },
    ],
  },
  "remove-duplicate-lines": {
    aboutText:
      "Remove Duplicate Lines deletes repeated lines from your text, leaving one copy of each unique line — the tedious cleanup for lists of email addresses, keywords, names, URLs, product codes or spreadsheet copies where the same entry appears several times. It works line by line and removes only exact repeats, so near-duplicates with different spelling or spacing survive and are worth scanning for afterwards. It runs entirely in your browser, so lists of names, emails or codes stay private.",
    steps: [
      { title: "Paste your list", description: "Add your text with one item per line. It is processed locally on your device." },
      { title: "Run the deduplication", description: "Extra copies of every repeated line are removed, keeping one of each." },
      { title: "Review the cleaned list", description: "Check that no needed line was removed, and scan for near-duplicates with different spelling or spacing — only exact repeats are removed." },
      { title: "Copy it onward", description: "Paste the unique list into your document or next tool; sort it first with the Text Sorter if you need it in order." },
    ],
    faqs: [
      { question: "What counts as a duplicate line?", answer: "A line that appears more than once in your pasted text. The tool keeps one copy of each unique line and removes the extra copies." },
      { question: "Does it keep the original order of my list?", answer: "The tool returns the unique lines from your input. Review the output order before copying it into a document where order matters." },
      { question: "Can I use it for email or keyword lists?", answer: "Yes. Any list with one item per line works well, including emails, keywords, URLs and product codes." },
      { question: "Are Apple and apple treated as the same line?", answer: "No. Only exact repeats are removed, so lines that differ in capitalisation, spelling or spacing are treated as different lines and both survive. Scan the cleaned list afterwards for near-duplicates like these, since a list can look clean while still holding the same item written two ways." },
      { question: "Does it keep the first copy of each repeated line?", answer: "One copy of each unique line is kept and the extra copies are removed. Review the order of the cleaned list before copying it into a document where order matters, and sort it first with the Text Sorter if you need it in order." },
      { question: "Can I use it to clean a keyword list for SEO?", answer: "Yes. Keyword lists, email lists, URLs, names and product codes all work, as long as there is one item per line. Paste the list, remove the repeats, and you are left with the unique entries ready to use or to sort." },
      { question: "Can I dedupe a list and then sort it?", answer: "Yes — that is a common two-step cleanup. Remove the duplicate lines first, then run the result through the Text Sorter to put the unique entries in alphabetical or numerical order. Sorting also puts near-duplicates next to each other, where they are easy to spot." },
    ],
  },
  "text-sorter": {
    aboutText:
      "Text Sorter arranges the lines of your text into order — alphabetically for names and words, numerically for numbers, or by line length when the shortest or longest entries matter. A sorted list is easier to scan and compare, and sorting puts near-duplicates next to each other where they are easy to spot. Sorting changes only the order of lines, never the text inside them, and it does not remove duplicates. It runs entirely in your browser, so your lists stay on your device.",
    steps: [
      { title: "Paste your text", description: "Add your list with one item per line. Nothing is uploaded." },
      { title: "Choose the sort mode", description: "Alphabetical for names and words, numerical for numbers, or by length for shortest/longest first." },
      { title: "Run and review", description: "Check the sorted order; try a different mode if the first order does not help." },
      { title: "Copy the sorted list", description: "Scan for near-duplicates while similar lines sit together, then paste the result into your document or spreadsheet." },
    ],
    faqs: [
      { question: "Which sort should I choose?", answer: "Choose alphabetical for names and words, numerical for numbers, and by length when the size of each line matters, such as finding the shortest or longest entries." },
      { question: "Does the Text Sorter remove duplicates?", answer: "No. It only changes the order of lines. If you also need duplicates removed, use the Remove Duplicate Lines tool on the sorted or original list." },
      { question: "Does sorting change the text inside each line?", answer: "No. Each line stays exactly as you pasted it. Only the order of the lines changes." },
      { question: "Why does 10 come before 2 when I sort alphabetically?", answer: "Because alphabetical sorting compares text character by character, and 1 comes before 2 — so 10, 100 and 11 all sort ahead of 2. If you are sorting numbers, choose the numerical mode instead, which compares the values and puts 2 before 10." },
      { question: "What does sorting by line length do?", answer: "It orders your lines from the shortest to the longest, or the longest to the shortest, depending on the direction you choose. It is useful when the size of each entry matters — finding the shortest names in a list, for example, or the longest lines in a file." },
      { question: "Can I sort a list of dates?", answer: "Dates sort reliably only when they are written in a consistent format, such as year-month-day (2026-11-12), because that order is alphabetical and chronological at the same time. Dates written day-first or month-first will sort in the wrong order, so rewrite them in year-first format before sorting." },
      { question: "Can I sort a list and then remove duplicates from it?", answer: "Yes. Sorting does not remove duplicates — it only changes the order — so run the sorted list through the Remove Duplicate Lines tool afterwards. Sorting first helps because it puts near-duplicates next to each other, where they are easy to spot before you dedupe." },
    ],
  },
  "text-cleaner": {
    aboutText:
      "Text Cleaner tidies messy text — extra whitespace, stray blank lines and HTML tags — the rough formatting you get when copying from a web page, a PDF or another document. It targets formatting clutter, not your words, and one pass produces plain, readable text that is easier to edit and reuse in a quote, a draft or another app. Review the output before publishing, and compare it with the original if the source was especially messy. It runs entirely in your browser.",
    steps: [
      { title: "Paste the messy text", description: "Add text copied from a web page, PDF or document. It stays on your device." },
      { title: "Run the cleaning step", description: "Extra whitespace and HTML markup are stripped out in one pass." },
      { title: "Review the cleaned text", description: "Compare it with the original to make sure nothing important — a heading, a link label, an intentional line break — was lost." },
      { title: "Copy the tidy text", description: "Run a second clean if the source was especially messy, then paste the cleanest version into your document or editor." },
    ],
    faqs: [
      { question: "What kind of mess does the Text Cleaner fix?", answer: "It cleans extra whitespace, removes HTML tags, and tidies messy text copied from web pages, PDFs and other documents, leaving plain readable text behind." },
      { question: "Will it change my actual words?", answer: "No. The cleaner targets formatting clutter such as whitespace and markup. Your words stay the same, though you should review the output before publishing." },
      { question: "Can it clean text copied from a web page?", answer: "Yes. That is one of its main uses. Paste the copied page text in, clean it, and you get plain text without the page markup." },
      { question: "Can the Text Cleaner fix text copied from Microsoft Word?", answer: "Yes. Text copied from Word, a web page, a PDF or another document often carries hidden formatting, extra whitespace and markup with it. Paste it here and one pass strips the clutter out, leaving plain readable text you can paste anywhere without the formatting coming along." },
      { question: "Will cleaning remove the links from my text?", answer: "It removes the HTML markup around the words, not the words themselves — so a linked phrase stays in the text as plain words, without the link attached. If you need the link addresses themselves, copy them out before cleaning, since the cleaner keeps readable text, not URLs hidden in markup." },
      { question: "Should I clean text before pasting it into a website or email?", answer: "Yes, it is good practice. Pasting straight from a web page or Word can carry fonts, colours and hidden spacing into your page or email, where they show up as odd formatting. Cleaning first gives you plain text that takes on the styling of wherever you paste it." },
      { question: "How is the Text Cleaner different from Remove Extra Spaces?", answer: "Remove Extra Spaces focuses only on spacing — repeated spaces and extra blank lines. The Text Cleaner does that kind of tidying too, but it also strips HTML tags and other formatting clutter from copied text. Use Remove Extra Spaces for a spacing problem, and the Text Cleaner when the text came from a web page or document and needs a full tidy-up." },
    ],
  },
  "lorem-ipsum-generator": {
    aboutText:
      "Lorem Ipsum Generator creates placeholder text in paragraphs or sentences — the classic dummy copy designers use to fill a layout while real content is still being written, so spacing, fonts and structure can be judged without waiting for final copy. Because lorem ipsum reads like natural language without carrying meaning, reviewers focus on the design rather than the words, which makes it ideal for mockups, wireframes, templates and client previews. It runs entirely in your browser; nothing you enter leaves your device.",
    steps: [
      { title: "Choose paragraphs or sentences", description: "Pick the unit that matches the spaces in your layout." },
      { title: "Set the amount", description: "Decide how much placeholder text you need for a realistic fill." },
      { title: "Generate and copy", description: "Create the lorem ipsum text and paste it into your layout or mockup." },
      { title: "Replace section by section", description: "Adjust the amount so no large empty areas remain, then swap each block for final copy as it is approved." },
    ],
    faqs: [
      { question: "What is lorem ipsum?", answer: "Lorem ipsum is traditional placeholder text used in design and publishing. It looks like natural language but carries no real meaning, so readers judge the layout instead of the words." },
      { question: "Can I generate paragraphs or sentences?", answer: "Yes. The tool can generate placeholder paragraphs or sentences, so you can match the amount of filler text to the space in your design." },
      { question: "When should I use placeholder text?", answer: "Use it for mockups, wireframes, templates and client previews where the design needs to be judged before the final copy is ready." },
      { question: "What does Lorem ipsum dolor sit amet mean?", answer: "Almost nothing — it is scrambled Latin, and the classic opening line roughly corresponds to words about pain and love, but the text as used carries no real meaning. That is the point: it reads like natural language, so reviewers judge the layout and spacing instead of getting distracted by the words." },
      { question: "How much placeholder text should I use in a mockup?", answer: "Match the amount to the space in your layout, and adjust it so no large empty areas remain. Generate in paragraphs or sentences to fit each block, and swap each block for final copy as it is approved, rather than leaving placeholder text in a finished design." },
      { question: "Is it bad to leave lorem ipsum on a live website?", answer: "Yes — placeholder text should never go live. It tells visitors and search engines the page is unfinished, and it says nothing about what you actually offer. Use it for mockups, wireframes and client previews, and replace every block with real copy before publishing." },
      { question: "Can I use lorem ipsum in a client preview?", answer: "Yes, that is one of its best uses. Because it carries no meaning, a client judges the design, fonts and spacing instead of arguing about draft wording. Just make it clear the text is a placeholder, so nobody mistakes it for the final copy." },
    ],
  },
  "remove-extra-spaces": {
    aboutText:
      "Remove Extra Spaces tidies text by collapsing repeated spaces between words into single spaces and removing extra blank lines — the double spaces and empty gaps that hurried typing and copy-paste leave behind, making documents look uneven and occasionally breaking forms and content systems. It focuses on spacing only: normal paragraph structure is meant to stay intact, so check that intentional paragraph breaks still look right in the output. It runs entirely in your browser, so drafts and personal writing stay private.",
    steps: [
      { title: "Paste your text", description: "Add the document, email or pasted content with extra spaces or blank lines. It stays on your device." },
      { title: "Run the cleanup", description: "Repeated spaces collapse to singles and extra blank lines are removed in one pass." },
      { title: "Check the paragraphs", description: "Review the output to confirm your paragraph breaks and structure still look the way you want." },
      { title: "Copy the cleaned text", description: "Paste it into its final destination and give it a quick read to confirm it looks even throughout." },
    ],
    faqs: [
      { question: "What does Remove Extra Spaces actually do?", answer: "It collapses repeated spaces between words into single spaces and removes extra blank lines, leaving evenly spaced, tidy text." },
      { question: "Will it remove all line breaks?", answer: "It targets extra blank lines and repeated spaces, not normal paragraph structure. Review the output to make sure your paragraphs still look the way you want." },
      { question: "Is it different from the Text Cleaner?", answer: "Yes. This tool focuses specifically on spaces and blank lines, while the Text Cleaner also handles other mess such as HTML tags and general formatting clutter." },
      { question: "Why do double spaces keep appearing in my documents?", answer: "Usually from hurried typing, or from text copied from a web page or PDF, where extra spaces and blank lines come along with the words. They make a document look uneven and can occasionally break forms and content systems that expect single spacing." },
      { question: "Can extra spaces break a form or a website?", answer: "Sometimes. Extra spaces can push a field over a character limit, or carry invisible formatting into a content system that then displays odd gaps. Cleaning the spacing first is a quick fix before submitting a form or publishing a page." },
      { question: "Can I clean up text pasted from a PDF?", answer: "Yes. Text copied from a PDF often arrives with double spaces and empty gaps between lines. Paste it here, run the cleanup, and the repeated spaces collapse to singles and the extra blank lines are removed in one pass." },
      { question: "Will my paragraphs stay separate after cleaning?", answer: "Yes — the tool targets extra blank lines and repeated spaces, not normal paragraph structure. Paragraph breaks are meant to stay intact, but give the output a quick read to confirm it looks the way you want before pasting it into its final destination." },
    ],
  },
  "reverse-text": {
    aboutText:
      "Reverse Text flips your text backwards in two ways: by characters, which turns the whole string around letter by letter, or by words, which keeps each word intact but reverses their order. Character reversal suits codes, puzzles and decorative effects; word reversal stays readable and works for games and creative writing. Teachers use it for word games and creators for eye-catching posts. It runs entirely in your browser, so messages and puzzle drafts never leave your device.",
    steps: [
      { title: "Paste or type your text", description: "Add the sentence, message or passage you want to flip. It is processed locally." },
      { title: "Choose the mode", description: "Reverse by characters for a fully backwards string, or by words to keep each word whole in reverse order." },
      { title: "Run and compare", description: "Review the reversed text — and try the other mode on the same text, since the two give very different results." },
      { title: "Copy and use it", description: "Test the reversed text in its final context, such as a puzzle sheet or post, then share it." },
    ],
    faqs: [
      { question: "What is the difference between reversing by characters and by words?", answer: "Reversing by characters flips every letter, so the whole string reads backwards. Reversing by words keeps each word whole but puts the words in reverse order." },
      { question: "Can I reverse a full sentence?", answer: "Yes. Paste a sentence or a longer passage, pick a mode, and the tool reverses it. Review the output to check it matches the effect you wanted." },
      { question: "Is reversed text still readable?", answer: "Word reversal stays readable because the words themselves are unchanged. Character reversal is meant to be puzzling or decorative rather than easy to read." },
      { question: "How do I write my name backwards?", answer: "Paste your name and reverse it by characters, which flips the whole string letter by letter. For a longer message, try reversing by words instead — each word stays whole, but the words run in reverse order, which stays readable." },
      { question: "Can I use Reverse Text to check if a word is a palindrome?", answer: "Yes. Reverse the word by characters and compare the result with the original — if they match exactly, the word reads the same forwards and backwards, which is what a palindrome is. Try it with words like madam, level or radar." },
      { question: "Can I use reversed text in a social media post?", answer: "Yes. Creators use reversed text for eye-catching posts, puzzles and word games, since an unusual string makes people stop and read it. Test the result in the app first, since some platforms display reversed characters differently." },
      { question: "Does reversing text change what it means?", answer: "Word reversal keeps every word intact but changes their order, so the meaning shifts or disappears. Character reversal turns the whole string backwards, which is meant to be puzzling or decorative rather than easy to read — that is why it suits codes, puzzles and games." },
    ],
  },
  "spell-checker": {
    aboutText:
      "Spell Checker finds spelling mistakes in your text and suggests corrections — misspelled words, typos, and words spelled wrongly for their context. It is a fast safety net for writing you are about to send: a job application, assignment, proposal or post you have read so many times your brain fills in the intended word while a reader notices the mistake at once. This is a server tool and needs a configured AI provider on the site; without one it shows an error. Treat suggestions as help, not orders — names, brand terms and regional spellings may be flagged even when correct.",
    steps: [
      { title: "Paste your text", description: "Add the essay, email, application or article you want reviewed. Remove passwords, addresses and private details first." },
      { title: "Submit for review", description: "Your text is sent to the configured AI provider, which flags suspect words and suggests corrections." },
      { title: "Work through the flags", description: "Accept corrections for genuine typos; keep names and terms that are intentionally spelled that way." },
      { title: "Do a final read", description: "Watch for correctly-spelled but wrongly-used words like their/there, then copy the clean text back into your document." },
    ],
    faqs: [
      { question: "Does the Spell Checker also fix grammar?", answer: "Its focus is spelling mistakes and suggested corrections. For grammar, punctuation and wording, use the Grammar Checker as well, since the two tools catch different kinds of errors." },
      { question: "Why is a correct word flagged as a mistake?", answer: "Proper names, brand names, technical terms and regional spellings are often flagged because they are uncommon or differ by country. If the spelling is right for your audience, keep it and move on." },
      { question: "What if the tool shows an error?", answer: "The spelling feature needs a configured AI provider on the site. Without one, it shows an error rather than results. Once a provider is configured, the checker runs normally." },
    ],
  },
  "article-rewriter": {
    aboutText:
      "Article Rewriter rewrites longer articles in a new voice — changing wording, sentence structure and tone across a full draft, not just a sentence — for adapting your own article to a different audience, platform or format. Rewriting is legitimate when the article is yours, properly licensed, or fully reworked with your own research and attribution; it does not make someone else's work yours. Expect to edit the output: long rewrites can drift from the original meaning or drop details. This is a server tool and needs a configured AI provider; without one it shows an error.",
    steps: [
      { title: "Paste your article", description: "Add the longer article or draft you want to rework. Remove sensitive, confidential or unpublished information first." },
      { title: "Describe the voice", description: "Say how the new version should read — simpler, more formal, more conversational — where the tool offers the choice." },
      { title: "Submit and read against the original", description: "Your text is sent to the configured AI provider. Compare the rewrite with the original, checking facts, figures and key claims." },
      { title: "Restore and polish", description: "Put back any dropped details, fix sentences that changed meaning, and finish the edit in your own voice before publishing." },
    ],
    faqs: [
      { question: "Can I rewrite someone else's article and publish it as mine?", answer: "No. Rewriting does not transfer ownership. Only rewrite your own work, licensed material, or content you have substantially reworked with your own research and proper attribution." },
      { question: "How is this different from the Paraphrasing Tool?", answer: "The Paraphrasing Tool focuses on sentences and short passages, keeping the meaning close to the original. The Article Rewriter handles longer text and reshapes it in a new voice, which requires more editing afterward." },
      { question: "Why do I need to edit the rewritten article?", answer: "Long rewrites can lose details, alter emphasis or introduce errors. A careful human edit restores accuracy, keeps your voice, and ensures the final article says exactly what you intend." },
    ],
  },
  "ai-writer": {
    aboutText:
      "AI Writer generates a starting draft from a prompt and tone settings — an outline, an introduction, a product description or a short article — designed to break the blank-page problem, not to replace your judgment. The strongest results come from a specific prompt (topic, audience, purpose, length, key points) and a willingness to rewrite: drafts can contain errors and generic claims, so check facts, add your own examples and edit the voice until it sounds like you. This is a server tool and needs a configured AI provider; without one it shows an error.",
    steps: [
      { title: "Write a clear prompt", description: "Describe your topic, audience and purpose, and remove any sensitive information before submitting." },
      { title: "Set the tone and details", description: "Choose a tone such as friendly, formal or persuasive where offered, and add key points, length and facts the draft should include." },
      { title: "Generate the draft", description: "Your prompt is sent to the configured AI provider, which produces the starting draft." },
      { title: "Rewrite it into yours", description: "Remove anything inaccurate, generic or off-topic, add your own examples and experience, and proofread before publishing." },
    ],
    faqs: [
      { question: "Can I publish an AI Writer draft without editing it?", answer: "You should not. Drafts can contain errors, generic claims and flat phrasing. Edit for accuracy, add your own insight, and make the voice your own before publishing anything." },
      { question: "What makes a good prompt for the AI Writer?", answer: "Be specific about topic, audience, purpose, tone and length, and include the key points you want covered. A vague prompt produces a vague draft, while a detailed prompt gives you a much stronger starting point." },
      { question: "Why does the writer show an error?", answer: "The writer needs a configured AI provider on the site. If no provider is enabled, it shows an error instead of a draft. Once a provider is configured, the writer runs normally." },
    ],
  },
  "ai-translator": {
    aboutText:
      "AI Translator translates text between many languages in seconds — paste a paragraph, message or document excerpt, choose the languages, and get a readable translation for travel, study, customer support or working across languages. Machine translation is best for understanding and everyday communication; idioms, humour, legal terms and culturally specific references still need a careful human check, and legal, medical or safety-critical text needs a qualified human translator. This is a server tool and needs a configured AI provider; without one it shows an error.",
    steps: [
      { title: "Paste the text", description: "Add the text you want to translate. Remove personal data or confidential business text first." },
      { title: "Choose the languages", description: "Select the source language, or let the tool detect it, and choose your target language." },
      { title: "Submit for translation", description: "Your text is sent to the configured AI provider, which returns the translation." },
      { title: "Review before you use it", description: "Check names, numbers, dates and key terms, fix idioms and tone, then copy the reviewed translation into your message or document." },
    ],
    faqs: [
      { question: "Is machine translation accurate enough for legal or medical text?", answer: "No, not on its own. Legal, medical and safety-critical translations need a qualified human translator, since a small error can change the meaning with serious consequences. Use this tool for everyday understanding and drafts." },
      { question: "Which languages can I translate between?", answer: "The translator supports many common languages. If your language pair is not available or the result looks uncertain, try shorter sentences and check the result against a second source." },
      { question: "Why does the translator show an error?", answer: "The translation feature needs a configured AI provider on the site. If no provider is enabled, it shows an error instead of a translation. It will work once a provider has been configured." },
    ],
  },
  "ai-email-writer": {
    aboutText:
      "AI Email Writer turns your bullet points into a complete, polite email — greeting, body and closing — with the tone the situation needs: formal for a client, friendly for a colleague, concise for a busy executive. Starting from bullets keeps you in control of the content while the tool handles structure and wording, which suits follow-ups, introductions, apologies, meeting requests and applications. Always read the draft before sending and check names, dates and promises. This is a server tool and needs a configured AI provider; without one it shows an error.",
    steps: [
      { title: "List your bullet points", description: "Write the purpose, key facts, dates or deadlines, and the action you want from the reader. Keep sensitive details out." },
      { title: "Add context and tone", description: "Say who the email is for and what outcome you want, and choose a tone such as formal, friendly or concise where offered." },
      { title: "Generate the draft", description: "Your points are sent to the configured AI provider, which drafts the full email." },
      { title: "Check, edit, send", description: "Verify names, dates and commitments, edit until it sounds like you and says exactly what you mean, then copy it into your mail app and send." },
    ],
    faqs: [
      { question: "What should I include in my bullet points?", answer: "Include the purpose, the key facts, any dates or deadlines, and the action you want from the reader. The clearer your bullets, the more accurate and useful the draft will be." },
      { question: "Should I send the draft without reading it?", answer: "No. Always check names, dates, promises and tone first. A draft is a starting point, and you are responsible for what you send, so edit it until it says exactly what you mean." },
      { question: "Why does the email writer show an error?", answer: "The email feature needs a configured AI provider on the site. If no provider is enabled, it shows an error instead of a draft. It will work once a provider has been configured." },
    ],
  },
  "crop-image": {
    aboutText:
      "Crop Image trims a picture freeform — drag to exactly the area you want — or with a preset aspect ratio when a platform demands a specific shape, like a square avatar or a wide header. Cropping only removes the outer parts of a picture; it never changes the colors or sharpness of what remains, and your original file is never overwritten. It runs entirely in your browser, so the picture never leaves your device.",
    steps: [
      { title: "Choose your picture", description: "Pick a JPG, PNG or WebP picture from your device. It is read locally and never uploaded." },
      { title: "Pick freeform or a preset ratio", description: "Draw any rectangle you like, or lock the box to a fixed shape such as a square or a wide rectangle." },
      { title: "Position the crop box", description: "Drag the box over the part you want to keep and adjust the edges until the subject sits comfortably inside the frame." },
      { title: "Download the crop", description: "Preview the result, then save the cropped image. Your original stays untouched for a different crop later." },
    ],
    faqs: [
      { question: "What is the difference between freeform and preset cropping?", answer: "Freeform cropping lets you draw any rectangle you like. A preset ratio locks the box to a fixed shape, such as a square or a wide rectangle, which is useful when a platform requires that shape." },
      { question: "Does cropping reduce image quality?", answer: "Cropping removes pixels outside your chosen area but does not soften or recolor the pixels you keep. A very tight crop from a small original can look less sharp when enlarged, so start from the largest version you have." },
      { question: "Can I undo a crop?", answer: "Your original file is never changed, so you can reopen it and crop it differently at any time. Download the version you like and keep the original as your backup." },
      { question: "Can I crop a photo to passport size?", answer: "Yes. Crop freeform to the passport shape — taller than wide, roughly 3.5 × 4.5 — keeping the head and shoulders centred in the frame, then use Image Resizer to set the exact pixels the form asks for (413 × 531 at 300 dpi is the common one). Always check your form's own numbers first, since countries differ." },
      { question: "How do I crop a screenshot to just the part I need?", answer: "Upload the screenshot, drag the crop box around the exact area — an error message, a chart, one paragraph — and download. Cropping out toolbars, names and unrelated windows also keeps private details out of anything you share." },
      { question: "Can I crop a photo into a square for a profile picture?", answer: "Yes. Lock the crop to the square preset ratio, position your face or subject in the middle, and download. Platforms that show avatars in a circle still take a square upload — the circle is applied by the platform, so keep important detail away from the corners." },
      { question: "Can I crop a picture on my phone?", answer: "Yes. The tool runs in your phone's browser: upload the photo, drag the crop box with touch, and download the cropped copy — no app to install." },    ],
  },
  "rotate-image": {
    aboutText:
      "Rotate Image fixes pictures that arrive sideways, upside down or mirrored: turn a photo left or right, or flip it horizontally or vertically, and download the corrected version without opening a photo editor. One caution from experience: a horizontal flip mirrors everything, including any text in the picture, so signs and labels will read backwards — rotate instead when the picture contains writing. It runs entirely in your browser.",
    steps: [
      { title: "Choose your picture", description: "Pick the JPG, PNG or WebP picture you want to fix. It stays on your device." },
      { title: "Rotate until it is upright", description: "Turn the image left or right until it is the right way up." },
      { title: "Flip only if mirrored", description: "Use the horizontal flip to correct a mirrored selfie, or a vertical flip when rotation alone cannot fix the picture." },
      { title: "Check and download", description: "Check the preview — especially any text — then save the corrected picture." },
    ],
    faqs: [
      { question: "What is the difference between rotating and flipping?", answer: "Rotating turns the whole picture, like turning a printed photo on a table. Flipping mirrors it, so left and right swap places. Use rotation to fix orientation and flipping to correct a mirrored image." },
      { question: "Will flipping reverse text in my photo?", answer: "Yes. A horizontal flip mirrors everything, including writing, so signs and labels will read backwards. If your picture contains text, rotate it instead and check the preview." },
      { question: "Does rotating reduce image quality?", answer: "Rotating by quarter turns keeps the picture sharp. Repeated editing and re-saving in a lossy format can gradually soften a photo, so rotate from your original file when you can." },
      { question: "How do I fix a photo that shows sideways on my computer?", answer: "Phone photos sometimes carry an orientation note that not every program honours, so they open sideways elsewhere. Rotate the photo here until it is upright and download it — the saved copy is written upright, so it displays correctly everywhere." },
      { question: "Can I fix a mirrored selfie?", answer: "Yes. Front cameras often save the mirror image; a horizontal flip puts it back to how others see you. Check any text in the shot afterwards, because flipped writing reads backwards." },
      { question: "Can I straighten a photo that is tilted by a few degrees?", answer: "No — this tool turns pictures in quarter turns (90°) and flips them; it has no fine-angle straightening. For a slightly tilted shot, a full photo editor is the right tool; come back here for sideways and upside-down fixes." },
      { question: "Can I rotate a picture on my phone without an app?", answer: "Yes. Open the tool in your phone's browser, upload the picture, rotate or flip it, and download the corrected copy — nothing to install and the picture never leaves your device." },    ],
  },
  "convert-image": {
    aboutText:
      "Convert Image changes pictures between common formats — JPG, PNG, WebP, BMP and GIF — so they work wherever you need them: an upload form, a design program or a printing service. Choose by the job: JPG for photographs, PNG for graphics and transparency, WebP for small files on modern websites. Converting cannot add detail that was never there, and converting a transparent PNG to JPG drops the see-through areas. It runs entirely in your browser.",
    steps: [
      { title: "Choose your picture", description: "Pick the image you want to convert from your device. It is processed locally." },
      { title: "Pick the target format", description: "Choose JPG, PNG, WebP or another offered format to match where the picture is going." },
      { title: "Mind the transparency", description: "If your picture has see-through areas you need to keep, avoid JPG — choose PNG or WebP instead." },
      { title: "Convert and download", description: "Start the conversion, preview the result, then save the new file. Keep your original for future use." },
    ],
    faqs: [
      { question: "Which image format should I choose?", answer: "Use JPG for photographs and general sharing, PNG for graphics, logos and transparent backgrounds, and WebP for modern websites where small file size matters. When in doubt, match the format the site or app you are uploading to requests." },
      { question: "Will converting improve my image quality?", answer: "No. Conversion changes the container, not the detail inside the picture. A blurry photo stays blurry in a new format, so always start from the best-quality original you have." },
      { question: "What happens to transparency when I convert to JPG?", answer: "JPG does not support transparency, so see-through areas become solid in the converted file. If transparency matters, convert to PNG or WebP instead." },
      { question: "How do I convert a PNG screenshot to JPG for an upload form?", answer: "Upload the screenshot, choose JPG as the target format, and convert. Many forms accept only JPG, and the JPG copy is usually far smaller than the PNG — just remember that any transparent areas become solid." },
      { question: "Can I convert an old BMP image to JPG or PNG?", answer: "Yes. BMP is one of the supported formats, so an old screenshot or scan saved as BMP can be converted to JPG for sharing or PNG for quality, in the same way as any other picture." },
      { question: "Can I convert several images at once?", answer: "No — convert one picture at a time. Each conversion is quick, and converting individually keeps your originals organised; download each result before starting the next." },
      { question: "Can I convert an image on my phone?", answer: "Yes. The converter runs in your phone's browser on Android or iPhone, so a picture saved in the wrong format can be fixed and re-uploaded without a computer." },    ],
  },
  "jpg-to-png": {
    aboutText:
      "JPG to PNG converts JPG pictures into PNG files in your browser, for design tools, print services and upload systems that ask for PNG specifically. Be realistic about what it does: the PNG will not gain transparency, because the JPG never had any, and it will not become sharper — it will usually be larger than the JPG, since PNG stores pictures losslessly. Convert because you need the format, not because you expect a quality upgrade.",
    steps: [
      { title: "Choose a JPG image", description: "Pick the JPG picture from your device. It stays on your device throughout." },
      { title: "Start the conversion", description: "The PNG version is prepared locally in your browser." },
      { title: "Preview the PNG", description: "Confirm the picture looks the same as your JPG." },
      { title: "Download and keep the original", description: "Save the PNG for wherever PNG is required, and keep the smaller JPG as your master copy." },
    ],
    faqs: [
      { question: "Will converting JPG to PNG improve quality?", answer: "No. The PNG will contain the same picture detail as the JPG you started with. Conversion changes the file format; it does not restore detail that JPG compression removed." },
      { question: "Why is the PNG file larger than my JPG?", answer: "PNG uses lossless storage, which keeps every pixel exactly, while JPG uses lossy compression to save space. The same picture therefore takes up more room as a PNG." },
      { question: "Does a converted PNG have a transparent background?", answer: "No. JPG images have no transparency, so a converted PNG will have a solid background just like the original photo. Transparency has to exist in the source image to survive a conversion." },
      { question: "Can I convert a JPG logo to PNG to get a transparent background?", answer: "No. The JPG has no transparency stored in it, so the PNG keeps the same solid background. If the logo sits on a plain white backdrop, Background Remover can clear that colour afterwards — check its limits first, since it works on solid backgrounds only." },
      { question: "A print service or design tool asks for PNG — will this conversion do?", answer: "Yes. Converting gives you a genuine PNG file with the same picture inside, which satisfies systems that require the PNG format for uploads, print orders or design work." },
      { question: "Does converting JPG to PNG remove the blocky compression artefacts?", answer: "No. Artefacts from the original JPG compression are part of the picture now, and the PNG simply stores them losslessly. Always convert from the best-quality JPG you have." },
      { question: "Can I convert JPG to PNG on my phone?", answer: "Yes. The converter runs in your phone's browser, so you can produce a PNG copy of a photo or screenshot wherever you are and upload it straight from the phone." },    ],
  },
  "png-to-jpg": {
    aboutText:
      "PNG to JPG turns PNG pictures into smaller JPG files in your browser — the simplest fix when a website caps upload sizes or an email refuses a big screenshot or photo attachment. For photographs especially, the size saving is usually dramatic while the picture still looks fine. The one trade-off is transparency: JPG cannot store see-through areas, so they become solid in the converted file. Logos that rely on transparency should stay PNG.",
    steps: [
      { title: "Choose a PNG image", description: "Pick the PNG picture from your device. It is converted locally, never uploaded." },
      { title: "Check the transparency", description: "If the picture has see-through areas you need to preserve, keep the PNG and use the JPG only where a solid background is fine." },
      { title: "Convert", description: "Start the conversion and wait a moment while the JPG version is prepared." },
      { title: "Compare and download", description: "Confirm the JPG looks acceptable, then save the smaller file for sharing, uploading or emailing." },
    ],
    faqs: [
      { question: "How much smaller will my JPG be than the PNG?", answer: "It depends on the picture. Photographs and detailed screenshots often shrink by a large amount, while simple graphics with flat colors shrink less. Either way, the JPG is almost always smaller than the equivalent PNG." },
      { question: "Will I lose transparency when converting PNG to JPG?", answer: "Yes. JPG cannot store transparency, so see-through areas become solid. If you need the transparent version, keep your original PNG alongside the JPG." },
      { question: "Is JPG good enough for photos?", answer: "For sharing, web pages and everyday viewing, yes. JPG was designed for photographs and keeps them looking good at much smaller sizes than PNG." },
      { question: "A form rejected my PNG — how do I give it a JPG instead?", answer: "Upload the PNG here, convert, and upload the JPG copy. Many application, job and marketplace systems accept only JPG, and the converted file is smaller as well as compatible." },
      { question: "Will the text in my screenshot stay readable after converting to JPG?", answer: "For most screenshots, yes — text stays clear at normal viewing sizes. Very small text can soften slightly because JPG is a lossy format; if every pixel matters, keep the PNG as your master and use the JPG only where it is required." },
      { question: "Can I convert PNG to JPG on iPhone or Android?", answer: "Yes. The tool runs in the phone's browser, so screenshots and saved pictures can be converted and shared or uploaded without moving them to a computer." },
      { question: "My PNG is too big to email — will a JPG help?", answer: "Almost always. Photographs and detailed screenshots usually shrink dramatically as JPG, which makes them far easier to attach to an email or send in a chat. Simple flat-colour graphics shrink less, but the JPG is still normally the smaller file." },    ],
  },
  "webp-converter": {
    aboutText:
      "WebP Converter works in both directions: turn WebP pictures into JPG or PNG when an editor, app or older system refuses WebP, or turn JPG and PNG pictures into WebP when you want smaller files for a website. The format changes but the picture does not gain detail, and converting a WebP with transparency to JPG drops the see-through areas while PNG keeps them. It runs entirely in your browser.",
    steps: [
      { title: "Choose your image", description: "Pick a WebP, JPG or PNG picture from your device. It never leaves your device." },
      { title: "Pick the direction", description: "Decide whether you are converting to WebP for smaller web files, or from WebP to another format for compatibility." },
      { title: "Choose the target format", description: "JPG for the smallest compatible photo file, PNG when transparency has to survive." },
      { title: "Convert and download", description: "Preview the result, then save the converted file and keep your original for future conversions." },
    ],
    faqs: [
      { question: "What is WebP, and why do websites use it?", answer: "WebP is an image format designed to produce smaller files than JPG or PNG at similar visual quality. Smaller files mean faster page loads, which is why many websites now serve images in WebP." },
      { question: "Should I convert WebP to JPG or PNG?", answer: "Choose JPG when you want the smallest compatible file for photos and sharing. Choose PNG when the picture has transparency you need to keep, or when you are working with graphics and logos." },
      { question: "Will converting to WebP make my picture sharper?", answer: "No. Conversion changes how the picture is stored, not how much detail it contains. A converted file will look the same as the original at normal viewing sizes." },
      { question: "Why do images I save from websites arrive as WebP files?", answer: "Websites serve WebP because it loads faster, and browsers save the picture in the format it was delivered — there is usually no warning. Converting the saved file to JPG or PNG here gives you a copy that opens everywhere." },
      { question: "Can I just rename a .webp file to .jpg?", answer: "No. Renaming changes only the name; the picture inside is still WebP data, and stricter apps and upload forms will still reject it or fail to open it. A real conversion re-encodes the picture into the new format, which is what this tool does." },
      { question: "How do I convert JPG or PNG images to WebP for my website?", answer: "Upload the JPG or PNG, choose WebP as the target, and convert. WebP versions of the same picture are usually smaller, which helps pages load faster — keep the originals as masters in case you need them elsewhere." },
      { question: "Can I convert WebP images on my phone?", answer: "Yes. The converter runs in your phone's browser, so a WebP saved from a website can be turned into a JPG or PNG and shared or uploaded straight from the phone." },    ],
  },
  "webp-to-jpg": {
    aboutText:
      "WebP to JPG turns WebP pictures — the format most images saved from the web arrive in — into ordinary JPG files that open practically everywhere: editors, printers, presentations and upload forms that have never heard of WebP. JPG cannot store transparency, so see-through areas in a WebP become solid in the JPG; for a logo or graphic that needs transparency, convert to PNG instead. It runs entirely in your browser.",
    steps: [
      { title: "Choose a WebP file", description: "Pick the WebP picture from your device. It is processed locally." },
      { title: "Check for transparency", description: "If the picture relies on a transparent background, convert to PNG instead of JPG." },
      { title: "Start the conversion", description: "The JPG version is prepared in your browser in a moment." },
      { title: "Preview and download", description: "Confirm the JPG looks the way you expect, then save it for your editor, form or print order." },
    ],
    faqs: [
      { question: "Why convert WebP to JPG at all?", answer: "WebP is common on websites but not yet accepted by every editor, printer or upload form. JPG is supported almost everywhere, so converting removes compatibility problems in one step." },
      { question: "Will my picture lose quality when converted to JPG?", answer: "At normal viewing sizes, a converted photo looks the same as the original WebP. JPG compression can soften very fine detail slightly, but for sharing, printing and presentations the difference is negligible." },
      { question: "What happens to transparency in a WebP to JPG conversion?", answer: "Transparency is lost, because JPG has no way to store see-through areas. Those areas become solid in the JPG. Use the WebP to PNG converter if transparency matters." },
      { question: "Why won't my WebP image open in my editor or email?", answer: "WebP is a web format: browsers display it happily, but many editors, older programs, email clients and print services still refuse it. Converting to JPG gives you the same picture in the format everything accepts." },
      { question: "Can I just rename the .webp extension to .jpg?", answer: "No — the file's contents stay WebP whatever the name says, and programs that check the real format will reject it. Convert it here instead: the picture is re-encoded as a genuine JPG." },
      { question: "A website or form rejected my WebP upload — what now?", answer: "Convert the picture to JPG and upload that instead. Upload systems for jobs, marketplaces, schools and government services commonly accept JPG and PNG only, and JPG is the safest bet for a photograph." },
      { question: "Can I convert WebP to JPG on my phone?", answer: "Yes. The tool runs in your phone's browser, so a WebP saved from the web can be converted and re-shared or uploaded without a computer." },    ],
  },
  "webp-to-png": {
    aboutText:
      "WebP to PNG is the right conversion when a WebP picture has a transparent background that JPG would ruin: it turns WebP pictures into PNG files that preserve see-through areas, for logos, product cutouts and graphics that must layer cleanly over another background. The trade-off is size — PNG files are usually larger than the WebP they came from, because PNG stores every pixel losslessly. It runs entirely in your browser.",
    steps: [
      { title: "Choose a WebP file", description: "Pick the WebP picture from your device. It never leaves your device." },
      { title: "Start the conversion", description: "The PNG version is prepared locally in your browser." },
      { title: "Check the transparency", description: "Preview the PNG and confirm transparent areas still look see-through." },
      { title: "Download and place it", description: "Save the PNG and layer it into your design, slide or editor. Keep the original WebP for web use, where its smaller size is an advantage." },
    ],
    faqs: [
      { question: "When should I choose PNG instead of JPG for a WebP conversion?", answer: "Choose PNG whenever the picture has transparency, or when it is a graphic, logo or illustration rather than a photograph. Choose JPG when you want the smallest file and the picture has a solid background." },
      { question: "Why is the PNG larger than the original WebP?", answer: "WebP compresses pictures more aggressively than PNG, which stores pixels losslessly. The same picture therefore takes up more space as a PNG — the cost of wider compatibility and preserved transparency." },
      { question: "Will the converted PNG look identical to the WebP?", answer: "For practical purposes, yes. The picture content and any transparency carry over, so the PNG looks the same when placed in a design or viewed on its own." },
      { question: "Can I use the converted PNG in Word, PowerPoint or a design tool?", answer: "Yes. PNG is accepted by office suites and design tools that refuse WebP, and the picture — including any transparency — carries across, so logos and graphics drop straight into documents and slides." },
      { question: "Can I convert a WebP logo to PNG and keep its transparent background?", answer: "Yes — that is exactly the case PNG is for. The transparent areas of the WebP stay transparent in the PNG, unlike a JPG conversion, where they would become solid." },
      { question: "Why does my computer save website images as WebP instead of PNG?", answer: "Because the website served them as WebP to load faster; your browser saves what it received. Converting here gives you the PNG copy the site never offered." },
      { question: "Can I convert WebP to PNG on my phone?", answer: "Yes. The converter runs in your phone's browser, so you can turn a saved WebP into a PNG and use it in apps or uploads straight from the phone." },    ],
  },
  "svg-converter": {
    aboutText:
      "SVG Converter exports SVG vector artwork — logos, icons and illustrations defined by shapes rather than pixels — as a PNG or JPG picture you can share, upload or place into documents. Because SVG art is resolution-independent, the export renders crisply at the size you choose. Pick PNG for transparency and sharp logo edges, JPG for a smaller general-purpose file. Keep the original SVG: once exported, the artwork is ordinary pixels and no longer editable as shapes. It runs entirely in your browser.",
    steps: [
      { title: "Choose an SVG file", description: "Pick the SVG artwork from your device. It is exported locally, never uploaded." },
      { title: "Pick PNG or JPG", description: "PNG if you need transparency or sharp logo edges; JPG for a smaller file where a solid background is fine." },
      { title: "Start the export", description: "The picture version is prepared in your browser in a moment." },
      { title: "Preview and download", description: "Confirm the artwork looks correct, save the PNG or JPG, and keep the SVG as your editable master." },
    ],
    faqs: [
      { question: "Should I export my SVG as PNG or JPG?", answer: "Use PNG for logos, icons and graphics where transparency or sharp edges matter. Use JPG for photographic artwork or when you simply want a smaller file with a solid background." },
      { question: "Will the exported image stay sharp?", answer: "Yes, at the size you export it. SVG artwork is made of shapes rather than pixels, so the export renders cleanly. For very large print use, export at a generous size and check the result before sending it on." },
      { question: "Can I edit the exported PNG or JPG like the SVG?", answer: "No. Once exported, the artwork becomes an ordinary picture made of pixels, so you lose the editable shapes and layers. Always keep your original SVG for future edits." },
      { question: "Can I convert an SVG logo to PNG with a transparent background?", answer: "Yes — choose PNG. The transparent parts of the artwork stay transparent, so the logo can sit over any background in a document, slide or web page. JPG would fill those areas with a solid background." },
      { question: "My exported image looks blurry — how do I get a sharper one?", answer: "Export at a larger size. The picture is rendered at the dimensions you choose, so pick dimensions at least as large as the biggest place you will use it — for print, export generously and check the result before sending it on." },
      { question: "Can I put an SVG logo into a Word or PowerPoint document?", answer: "Many office versions struggle with SVG files. Convert the logo to PNG here and insert that instead — it displays and prints reliably, and the transparent background is preserved." },
      { question: "Can I convert an SVG icon for use as a profile or app image?", answer: "Yes. Export the icon as a PNG at a square, generous size and upload that — platforms accept PNG everywhere, while SVG uploads are often refused." },    ],
  },
  "image-upscaler": {
    aboutText:
      "Image Upscaler enlarges small pictures in your browser and applies sharpening, so a photo or screenshot that would look soft and blocky on a slide or print becomes larger and cleaner-looking. Be clear about what it is: canvas resizing plus sharpening, not AI super-resolution. It cannot recover detail that was never in the original — no invented eyelashes, fine text or textures — so starting from the best version you have always gives the best result. Your picture never leaves your device.",
    steps: [
      { title: "Choose the small picture", description: "Pick a JPG or PNG picture from your device — the sharpest version you have. It stays on your device." },
      { title: "Pick the enlargement", description: "Choose how much larger you want the picture to be; the smallest enlargement that does the job looks best." },
      { title: "Upscale and sharpen", description: "The tool enlarges the image on canvas and applies sharpening locally in your browser." },
      { title: "Preview at real size and download", description: "Check the result at the size you plan to use it, not as a thumbnail. If it looks too soft, try a smaller enlargement, then save." },
    ],
    faqs: [
      { question: "Is this an AI upscaler that restores lost detail?", answer: "No. This tool enlarges pictures with canvas resizing plus sharpening. It makes images bigger and cleaner-looking, but it cannot recover detail that was never captured in the original, the way AI super-resolution tools claim to." },
      { question: "How much can I enlarge a picture before it looks bad?", answer: "It depends on the original. A modest enlargement of a decent photo usually looks fine, while blowing up a tiny, blurry picture several times will still look soft. Preview at your intended size and use the smallest enlargement that does the job." },
      { question: "Will upscaling fix a blurry photo?", answer: "Sharpening can make a slightly soft picture look crisper, but it cannot fix a genuinely blurry or out-of-focus photo. For best results, start from the sharpest original you have." },
      { question: "Can I upscale an image for printing?", answer: "A modest enlargement plus sharpening can make a photo print acceptably at a larger size than the original file suggests, but it cannot add real detail. Preview at the size you intend to print and start from the largest, sharpest version you have." },
      { question: "Can I enlarge a screenshot or logo for a presentation slide?", answer: "Yes — that is one of its best uses. A small screenshot or logo enlarged modestly and sharpened looks far cleaner full-slide than the original stretched by the presentation software." },
      { question: "A messaging app shrank my photo — can upscaling restore it?", answer: "It can make the picture bigger and cleaner-looking, but the detail the app discarded is gone for good. If the original photo still exists on the sender's phone, ask for it to be sent as a file or document instead." },
      { question: "What enlargement should I choose?", answer: "The smallest one that does the job. Each step up spreads the existing pixels thinner, so double the size usually looks better than pushing to the maximum. Preview at your real display or print size before downloading." },    ],
  },
  "image-to-pdf": {
    aboutText:
      "Image to PDF turns a pile of loose JPG and PNG pictures into a single PDF document — scanned notes, receipts, a portfolio or a set of product photos — that opens the same way on every device and keeps your pictures in order, one per page. It is assembled entirely in your browser, so your pictures never leave your device. A moment spent ordering the pictures before you convert saves the recipient from flipping through a shuffled document.",
    steps: [
      { title: "Choose your pictures", description: "Pick the JPG or PNG pictures you want to include. They stay on your device." },
      { title: "Arrange the order", description: "Put the pictures in the sequence you want them read, cover or first page first, and check each is the right way up." },
      { title: "Create the PDF", description: "The PDF is assembled locally in your browser, one picture per page." },
      { title: "Preview and download", description: "Confirm the pages are in the right order, then save the PDF to share, submit or print as a single document." },
    ],
    faqs: [
      { question: "How many images can I put in one PDF?", answer: "You can combine multiple pictures into a single PDF, with each picture appearing as a page in the order you choose. For very large sets, consider splitting them into a few documents so the file stays easy to share." },
      { question: "Will my pictures keep their quality in the PDF?", answer: "Yes, for practical purposes. The pictures are placed into the PDF as pages, so they display clearly when viewed or printed at normal sizes." },
      { question: "Can I reorder pages after creating the PDF?", answer: "Arrange your pictures in the right order before converting, since the PDF is assembled in that sequence. If the order is wrong, simply run the conversion again with the pictures rearranged." },
      { question: "Can I make a PDF from photos of documents for an application?", answer: "Yes — that is one of the most common uses. Photograph each page, order them here, and create one PDF to upload to the job, university or government portal that asks for a single document." },
      { question: "Can I combine JPG and PNG pictures in the same PDF?", answer: "Yes. This tool accepts JPG and PNG pictures together, placing each one on its own page in the order you arrange." },
      { question: "Can I turn phone photos into a PDF without a computer?", answer: "Yes. The tool runs in your phone's browser, so photos from your gallery can be ordered and combined into a PDF ready to share or upload, straight from the phone." },
      { question: "How do I share a set of screenshots as one document?", answer: "Add the screenshots in reading order and create the PDF — one screenshot per page. It is far easier to follow than a chain of separate image messages, and it prints as a single document." },    ],
  },
  "jfif-to-png": {
    aboutText:
      "JFIF to PNG converts JFIF pictures into standard PNG files that modern apps will actually open. JFIF is an older container closely related to JPEG, and some phones, cameras and messaging apps still save pictures with the .jfif extension — which many programs refuse to preview, edit or accept as an upload. The conversion runs in your browser, the PNG shows the same picture as the original, and the file will usually be larger because PNG stores pictures losslessly.",
    steps: [
      { title: "Choose your JFIF file", description: "Pick the .jfif picture from your device. It is read locally and never uploaded." },
      { title: "Start the conversion", description: "The PNG version is prepared in your browser — no server queue and no waiting for an upload." },
      { title: "Preview the PNG", description: "Confirm the picture displays correctly and looks the same as the original." },
      { title: "Download and use it", description: "Save the PNG and open, edit or upload it wherever the JFIF file was rejected. Keep the original as a backup until you are sure." },
    ],
    faqs: [
      { question: "What is a JFIF file?", answer: "JFIF is an older image format closely related to JPEG. Some devices and apps save photos with a .jfif extension, which many modern programs do not recognize, even though the picture inside is an ordinary JPEG-style image." },
      { question: "Will converting JFIF to PNG change how my picture looks?", answer: "No. The converted PNG shows the same picture as the JFIF file. Conversion fixes the compatibility problem without altering the image content, though it does not sharpen or repair the image either." },
      { question: "Why is the PNG file larger than the JFIF?", answer: "PNG stores pictures losslessly, while JFIF uses JPEG-style compression to save space. The same picture therefore takes up more room as a PNG." },
      { question: "Why did I receive a photo as a .jfif file?", answer: "Some phones, cameras, browsers and messaging apps save ordinary JPEG-style pictures with the .jfif extension. The picture inside is normal — it is the unfamiliar extension that makes other programs refuse it." },
      { question: "An upload form rejected my JFIF file — how do I fix it?", answer: "Convert it to PNG here and upload the PNG instead. PNG is accepted almost everywhere a JFIF was refused, and the picture itself does not change." },
      { question: "Can I open and convert a JFIF file on my phone?", answer: "Yes. The converter runs in your phone's browser, so a JFIF picture can be turned into a PNG and opened, edited or shared without a computer." },
      { question: "Is JFIF the same as JPG?", answer: "Closely related. JFIF is the container that originally defined how JPEG picture data is stored, so a JFIF file holds a JPEG-style image — which is why the converted PNG looks identical to the original." },    ],
  },
  "jpeg-to-jpg": {
    aboutText:
      "JPEG to JPG re-exports a JPEG picture with the shorter .jpg extension, for the older systems, upload forms and apps that reject a file ending in .jpeg. JPEG and JPG are the same format with two different names, so nothing about the picture changes — the quality, colors and size stay the same. It runs in your browser and simply gives the same picture the file name stricter systems expect.",
    steps: [
      { title: "Choose your JPEG file", description: "Pick the .jpeg picture from your device. It stays on your device and is never uploaded." },
      { title: "Re-export as JPG", description: "The JPG version is prepared locally in your browser." },
      { title: "Preview the JPG", description: "Confirm it looks identical to your original picture." },
      { title: "Download and submit", description: "Save the JPG and upload or submit it wherever the JPEG file was previously rejected." },
    ],
    faqs: [
      { question: "Are JPEG and JPG actually different formats?", answer: "No. They are the same format. JPEG is the full name and JPG is the shortened three-letter extension that older systems required. The picture data inside is identical either way." },
      { question: "Will converting JPEG to JPG reduce quality?", answer: "No. Because the format is the same, re-exporting as JPG does not recompress or degrade the picture. It simply gives the file the extension that stricter systems expect." },
      { question: "Could I just rename the file instead?", answer: "Renaming a .jpeg file to .jpg often works, but some systems check more than the name, and renaming is easy to get wrong on a phone. Using the converter produces a clean JPG file without the guesswork." },
      { question: "A form accepts only .jpg files and rejects my .jpeg photo — how do I fix it?", answer: "Re-export the photo here as JPG and upload that copy. The picture is unchanged; only the extension becomes the three-letter form the stricter system expects." },
      { question: "Can I convert JPEG to JPG on my iPhone or Android phone?", answer: "Yes. The tool runs in the phone's browser, so a .jpeg photo can be saved as a .jpg copy and uploaded to the form that rejected it, without moving to a computer." },
      { question: "Why do some of my photos end in .jpeg instead of .jpg?", answer: "Both endings come from the same format. The shorter .jpg dates from systems that allowed only three letters per extension; some cameras, phones and apps still write the full .jpeg, which is why a converter like this one is occasionally needed." },
      { question: "Can I convert a JPEG without uploading it anywhere?", answer: "Yes. The re-export happens locally in your browser — the photo never leaves your device — so it is safe for personal pictures and documents." },    ],
  },
  "screenshot-tool": {
    aboutText:
      "Screenshot Tool lets you upload a screenshot or any image and annotate it — adding notes, arrows and highlights that point exactly at what matters, so a support ticket, tutorial or feedback message is understood the first time. One honest clarification: this tool annotates images you upload, it does not capture your screen itself. Take the screenshot with your device's built-in shortcut first, then upload it here. Everything runs in your browser, so the image never leaves your device.",
    steps: [
      { title: "Capture your screenshot", description: "Use your device or operating system's built-in screenshot shortcut to grab the screen you want to explain." },
      { title: "Upload the image", description: "Open the Screenshot Tool and upload the captured screenshot — or any other image you want to mark up." },
      { title: "Add your annotations", description: "Add short notes, arrows or highlights close to the parts they describe, such as an error message, a button or a setting." },
      { title: "Preview and download", description: "Check that every mark is clear and readable, then download the annotated image and send it with your message, ticket or tutorial." },
    ],
    faqs: [
      { question: "Does this tool take a screenshot of my screen?", answer: "No. It annotates images you upload; it does not capture your screen. Capture the screenshot with your device or operating system first, then upload it here to add notes, arrows and highlights." },
      { question: "What kinds of annotations can I add?", answer: "You can mark up your uploaded image with notes, arrows and highlights that draw attention to specific areas, such as an error message, a button or a setting." },
      { question: "Can I annotate any image, or only screenshots?", answer: "You can upload and annotate any image, not just screenshots. Photos, diagrams and design mockups all work the same way once uploaded." },
      { question: "How do I take a screenshot before annotating it?", answer: "Use your device's shortcut: on Windows, Windows key + Shift + S (or Print Screen); on a Mac, Command + Shift + 4; on iPhone or Android, press the side/power and volume buttons together as your model directs. Then upload the capture here and add your notes and arrows." },
      { question: "Can I annotate a screenshot for a bug report or support ticket?", answer: "Yes — that is what it is for. Mark the error with a highlight, point an arrow at the button or setting involved, and add a short note; support teams resolve tickets faster when the problem area is marked." },
      { question: "Can I blur or hide private information in a screenshot?", answer: "No — the tool has no blur or redaction feature, and its marks are meant to draw attention, not conceal. Crop the private area out with Crop Image first, or take the screenshot with the sensitive content off screen." },
      { question: "Can I annotate a screenshot on my phone?", answer: "Yes. The tool runs in your phone's browser: capture the screenshot, upload it, add notes and arrows with touch, and download the marked-up image to send." },    ],
  },
  "random-text-generator": {
    aboutText:
      "Random Text Generator creates random words and strings on demand, in your browser. It is a handy source of filler content when the exact words do not matter, only that there is text to work with — filling test forms, trying out a layout, creating sample data or making example content for a demo. Because the output is random, every generation is different, so repeated tests never run against the same sample twice.",
    steps: [
      { title: "Choose the kind of text", description: "Pick the kind of random text you need, such as words or strings." },
      { title: "Set how much you want", description: "Decide how much random text to generate for your test, layout or example." },
      { title: "Generate the text", description: "Create the output and review it in the results area. Generate a fresh set if the first one does not suit — each run is different." },
      { title: "Copy and use it", description: "Copy the text into your form, mockup, demo or document." },
    ],
    faqs: [
      { question: "What kind of random text can I generate?", answer: "The tool creates random words and strings, which you can use as filler content, sample data or examples in tests and mockups." },
      { question: "Is the output the same each time?", answer: "No. The output is random, so each generation produces different words and strings. Generate again whenever you want a fresh set." },
      { question: "What is random text used for?", answer: "Common uses include testing forms and layouts, creating sample data, filling mockups and making example content for demos and presentations." },
      { question: "What is random text used for in software testing?", answer: "Filling test forms, trying out layouts, creating sample data and making example content for demos — any place where text is needed but the exact words do not matter. Because every generation is different, repeated tests never run against the same sample twice." },
      { question: "Can I use random text as sample data in a spreadsheet?", answer: "Yes. Generate random words or strings and paste them in as filler rows while you build or test a sheet. It is faster than typing example data by hand, and you can generate a fresh set whenever the first one no longer suits." },
      { question: "Is random text the same as lorem ipsum?", answer: "No. Lorem ipsum is a fixed piece of classic placeholder text that always reads the same, which suits design mockups. Random text is different every time you generate it, which suits testing and sample data, where variety matters more than looking like real language." },
      { question: "Can I generate the same random text twice?", answer: "No — the output is random, so each generation produces a different set of words and strings. If you need the same sample again, copy it before generating a fresh set, since there is no way to get the exact same output back." },
    ],
  },
  "uuid-generator-util": {
    aboutText:
      "UUID Generator (utility version) is the simpler edition of the site's UUID tool: plain controls, no signup and no developer setup — generate a UUID, copy it, and move on. A UUID is a long random-looking identifier that is practically unique every time, used to tell records, files, test accounts and trackers apart even when they share a name. It is a good fit when you need an ID quickly for a form, a test or a document. A UUID is an identifier, not a password, so do not treat one as a secret on its own.",
    steps: [
      { title: "Open the tool", description: "Open UUID Generator in your browser — no signup or install is needed, and the UUIDs are created on your own device." },
      { title: "Generate a UUID", description: "Use the simple controls on the page to create a new UUID." },
      { title: "Check the full value", description: "Make sure you have the complete identifier on screen, not a shortened copy." },
      { title: "Copy and paste it exactly", description: "Copy the UUID and paste it exactly where it belongs — a form field, spreadsheet cell, test record or document. Generate a fresh one rather than reusing the same UUID for two different items." },
    ],
    faqs: [
      { question: "Is this the same as the developer UUID Generator?", answer: "This is the simpler utility version, with a plainer interface for quick, everyday generation and copying. The site also offers a developer edition with developer-oriented options, but this one is built for speed and simplicity." },
      { question: "Can two generated UUIDs ever be the same?", answer: "In practice, no. UUIDs are generated randomly from such a large space that an accidental repeat is vanishingly unlikely, so for everyday use you can treat each generated value as unique." },
      { question: "Is a UUID a password?", answer: "No. A UUID identifies something; it does not prove who you are. Do not use a UUID as a password or as the only protection for private data." },
    ],
  },
  "unix-time-converter": {
    aboutText:
      "Unix Time Converter turns a Unix timestamp — the seconds counted since the start of 1970 — into a readable date and time, in your browser. You meet these long numbers in server logs, data exports, analytics files and app settings, usually at the exact moment you need to know what happened and when. This tool is deliberately focused on that one direction — reading Unix time. For the reverse, turning a date back into a timestamp, use the Timestamp Converter instead.",
    steps: [
      { title: "Copy the timestamp", description: "Copy the Unix timestamp from your log, export or message, making sure you have the full number." },
      { title: "Paste it into the converter", description: "Open the Unix Time Converter and paste the value in — no signup or download is needed." },
      { title: "Read the date and time", description: "Convert it and read the resulting date and clock time, then compare it with the event you are investigating." },
      { title: "Check for milliseconds if it looks wrong", description: "If the result lands far in the future or the past, the value was probably in milliseconds rather than seconds — check the source format and convert again." },
    ],
    faqs: [
      { question: "What does a Unix timestamp mean?", answer: "It is the number of seconds since 1 January 1970. Computers use it because a single number is easy to store and compare, even though people find an ordinary date and time much easier to read." },
      { question: "Why does my timestamp give a date in the far future?", answer: "That usually means the value is in milliseconds, not seconds. A millisecond timestamp is a thousand times larger, so reading it as seconds pushes the date far ahead. Divide by a thousand or check the source format, then convert again." },
      { question: "Can this tool turn a date back into Unix time?", answer: "No. This converter focuses on reading Unix time as a date and time. For the reverse direction, from a date to a timestamp, use the Timestamp Converter instead." },
    ],
  },
  "coin-flipper": {
    aboutText:
      "Coin Flipper flips a virtual coin — heads or tails, instantly, on any device with a browser — for the small decisions a real coin settles when one is not to hand: who goes first, which film to watch, which team kicks off. It also tracks your streaks, so you can watch a run of heads build up, which makes it fun for games and a vivid way for teachers to show how random results produce surprising runs. It is for casual decisions and fun, not for gambling or anything that needs a provably fair system.",
    steps: [
      { title: "Open the Coin Flipper", description: "Open the tool in your browser — no signup or download is needed, and flips happen on your own device." },
      { title: "Flip the coin", description: "Flip the virtual coin and wait for the result to appear." },
      { title: "Read heads or tails", description: "Use the result to settle your decision or start your game." },
      { title: "Flip again and watch the streaks", description: "Flip whenever you need another decision, and check the streak tracker to see how many of the same result have come up in a row." },
    ],
    faqs: [
      { question: "What is a streak in the Coin Flipper?", answer: "A streak is a run of the same result, such as four heads in a row. Tracking streaks makes the game more fun and helps show how randomness can produce surprising runs, even though each flip is independent." },
      { question: "Is a virtual coin flip really fair?", answer: "For casual decisions and games, yes. Each flip is random and independent of the last one, so a run of heads does not make tails more likely next time. It is not designed for gambling or regulated draws." },
      { question: "Can I use it when I do not have a real coin?", answer: "Yes, that is exactly the point. The Coin Flipper works in any browser, so you can settle a decision during a video call, in class or at a game night without hunting for a coin." },
    ],
  },
  "dice-roller": {
    aboutText:
      "Dice Roller rolls one die or several dice at once in your browser, shows each result straight away and keeps a history of your rolls — handy when physical dice are lost, in another room, or not owned by everyone playing online. Use it for board games, role-playing sessions, classroom maths and party games, including games that move by the total of two dice. Results are random and the roller is for casual play and learning, not for gambling or anything that needs a certified random system.",
    steps: [
      { title: "Choose how many dice", description: "Open the Dice Roller and pick one die, or several at once if your game uses a total or several players need a result in the same turn." },
      { title: "Roll the dice", description: "Roll and read the result of each die — and the total if your game moves by the sum." },
      { title: "Play your turn", description: "Move your piece, settle the battle or record the outcome, just as you would with physical dice." },
      { title: "Check the history when needed", description: "Look back at the roll history to settle a disagreement or review how the game has progressed, then keep rolling." },
    ],
    faqs: [
      { question: "How many dice can I roll at once?", answer: "You can roll one die or more than one, depending on what your game needs. Roll several at once when the game uses a total, or when several players or characters need a result in the same turn." },
      { question: "What does the roll history show?", answer: "The history records your past rolls during the session, so you can look back at earlier results. That helps settle disagreements about a roll and lets players review how a game has progressed." },
      { question: "How is this different from the Coin Flipper?", answer: "A coin flip gives one of two outcomes for a single decision. A dice roller gives numbered results, can roll several dice at once and keeps a history across many turns, which suits longer games." },
    ],
  },
  "notepad-online": {
    aboutText:
      "Notepad Online is a plain blank page in your browser for the notes that are too small for a document but too important to trust to memory — a phone number read out on a call, a quick list, a draft message. The key point: notes are saved locally in your browser, so you can close the tab and come back to them later on the same device and browser, with no signup. Local saving also means notes are not synced to your other devices, so copy anything that matters long-term into a document or notes app as well.",
    steps: [
      { title: "Open the notepad", description: "Open Notepad Online in your browser — it is ready in seconds, with no signup or install." },
      { title: "Write your note", description: "Type or paste your list, draft or idea, and tidy it up as you go." },
      { title: "Let it save locally", description: "Your note is kept in this browser on this device, so it is still here when you return in the same browser." },
      { title: "Copy important notes elsewhere", description: "Before clearing browser data or switching devices, copy anything that matters into a document, an email draft or a notes app so it is not lost." },
    ],
    faqs: [
      { question: "Where are my notes saved?", answer: "Your notes are saved locally in your browser, on the device you are using. They are not sent to a server by the tool and are not tied to an account, so you can return to them in the same browser later." },
      { question: "Can I see my notes on another device?", answer: "No, because local saving does not sync between devices. A note written on your phone will not appear on your computer unless you copy it across yourself, so save a copy elsewhere for notes you need everywhere." },
      { question: "Will I lose my notes if I clear my browser data?", answer: "Yes, clearing browser data can remove locally saved notes. If a note matters, copy it into a document, an email draft or a notes app before clearing data or changing browsers." },
    ],
  },
  "todo-list-online": {
    aboutText:
      "Todo List Online is a deliberately simple task list in your browser: add tasks, tick them off as you finish them, and remove them as the day changes — no signup, no teams, deadlines or charts. Tasks are saved in local storage, so your list is still there when you return in the same browser, whether you are planning errands, a study session or a small work project. It is not a full project manager, and that simplicity is the point: keep tasks short and concrete, like buy milk or email the plumber, and the list actually gets done. Lists do not sync between devices, so note down anything you need on the move.",
    steps: [
      { title: "Add your tasks", description: "Open Todo List Online and write each task as a short, concrete next step — one task per line of effort." },
      { title: "Work through the list", description: "Start at the top and work through your tasks in order." },
      { title: "Tick tasks off as you finish", description: "Mark each task done the moment it is finished, and remove anything that is no longer needed." },
      { title: "Return to the saved list", description: "Come back later in the same browser to see what is left, since tasks are saved in local storage on your device." },
    ],
    faqs: [
      { question: "Where are my tasks saved?", answer: "Your tasks are saved in local storage in your browser, on the device you are using. They are not sent to a server by the tool and are not tied to an account, so you can return to the list in the same browser later." },
      { question: "Can I see my todo list on another device?", answer: "No, because local storage does not sync between devices. A list made on your phone will not appear on your computer unless you recreate it there, so note down anything you need on the move." },
      { question: "What kind of tasks suit this tool?", answer: "Simple, everyday tasks work best: errands, chores, study tasks and small work jobs. It is not a full project manager, so keep tasks short, concrete and easy to tick off one at a time." },
    ],
  },
};

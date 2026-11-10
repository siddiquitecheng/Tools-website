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
      "Image Compressor shrinks JPG, PNG and WebP pictures in your browser so they load faster on web pages and send more reliably by email and messaging apps. The output is always saved as a JPEG named 'compressed' plus your original file name, so a PNG with transparency will come out with a solid background — if keeping transparency matters, use a format converter for that picture instead.",
    steps: [
      { title: "Choose your image", description: "Pick a JPG, PNG or WebP picture from your device. It is read locally and never uploaded." },
      { title: "Let it compress", description: "The tool prepares a smaller JPEG version right in your browser — no server queue, no waiting for an upload." },
      { title: "Check the size and preview", description: "Compare the new file size and make sure the picture still looks good to you." },
      { title: "Download the JPEG", description: "Save the compressed file and use it for your site, email or upload. Your original stays untouched." },
    ],
    faqs: [
      { question: "Does the Image Compressor reduce image quality?", answer: "Compression discards some image data, so a heavily compressed photo can look slightly softer. For typical web and sharing use the difference is hard to notice, and your original file is never changed, so you can always start again." },
      { question: "What formats can I compress?", answer: "You can compress JPG, PNG and WebP images. Whatever format you start with, the downloaded result is always a JPEG file." },
      { question: "Will my PNG transparency survive compression?", answer: "No. JPEG does not support transparency, so see-through areas in a PNG or WebP are replaced with a solid background in the compressed file." },
    ],
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
    ],
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
    ],
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
    ],
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
};

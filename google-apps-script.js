/**
 * Google Apps Script for Portfolio Inquiry Form
 * 
 * Instructions:
 * 1. Open https://script.google.com/
 * 2. Click "New project" (top left)
 * 3. Delete any default code in Code.gs and paste this entire file content.
 * 4. Click "Deploy" (top right) -> "New deployment"
 * 5. Select type: "Web app" (click gear icon next to "Select type")
 * 6. Set Description: "Portfolio Contact Form"
 * 7. Set "Execute as": "Me (manasx1upadhyay@gmail.com)"
 * 8. Set "Who has access": "Anyone"  <-- CRITICAL: Choose "Anyone" so submissions from your portfolio work without login
 * 9. Click "Deploy", then "Authorize access" (choose your Google account, click Advanced -> Go to Untitled project (unsafe), and Allow)
 * 10. Copy the "Web app URL" (ends in /exec) and paste it into ContactModal.jsx (or VITE_GOOGLE_SCRIPT_URL in .env)
 */

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    var data = {};
    if (e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (err) {
        data = e.parameter || {};
      }
    } else if (e.parameter) {
      data = e.parameter;
    }

    var name = data.name || "Anonymous";
    var email = data.email || "No email provided";
    var message = data.message || "No message provided";

    var subject = "[Website Inquiry] from " + name;
    var body = "You received a new inquiry from your portfolio:\n\n" +
               "Name: " + name + "\n" +
               "Email: " + email + "\n\n" +
               "Message:\n" + message + "\n\n" +
               "---\n" +
               "Sent from portfolio contact modal at " + new Date().toISOString();

    var htmlBody = 
      "<div style='font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif; max-width: 540px; margin: 0 auto; background: #0c0d12; color: #f2f2f5; border: 1px solid #22232d; border-radius: 12px; padding: 24px;'>" +
        "<div style='display: flex; align-items: center; margin-bottom: 20px; border-bottom: 1px solid #22232d; padding-bottom: 14px;'>" +
          "<span style='color: #ff4f2b; font-weight: 700; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;'>✦ New Portfolio Transmission</span>" +
        "</div>" +
        "<div style='margin-bottom: 16px;'>" +
          "<div style='color: #8a8d9b; font-size: 11px; text-transform: uppercase; letter-spacing: 1px;'>Client / Sender</div>" +
          "<div style='font-size: 16px; font-weight: 600; color: #ffffff; margin-top: 4px;'>" + name + "</div>" +
        "</div>" +
        "<div style='margin-bottom: 16px;'>" +
          "<div style='color: #8a8d9b; font-size: 11px; text-transform: uppercase; letter-spacing: 1px;'>Email Address</div>" +
          "<div style='font-size: 14px; color: #ff7849; margin-top: 4px;'><a href='mailto:" + email + "' style='color: #ff7849; text-decoration: none;'>" + email + "</a></div>" +
        "</div>" +
        "<div style='margin-bottom: 24px;'>" +
          "<div style='color: #8a8d9b; font-size: 11px; text-transform: uppercase; letter-spacing: 1px;'>Message</div>" +
          "<div style='font-size: 14px; line-height: 1.6; color: #d0d2db; background: #14151d; border: 1px solid #282936; border-radius: 8px; padding: 14px; margin-top: 6px; white-space: pre-wrap;'>" + message + "</div>" +
        "</div>" +
        "<div style='border-top: 1px solid #22232d; padding-top: 14px; font-size: 11px; color: #5a5d6e; display: flex; justify-content: space-between;'>" +
          "<span>Manas Portfolio System</span>" +
          "<span>" + new Date().toLocaleTimeString() + "</span>" +
        "</div>" +
      "</div>";

    MailApp.sendEmail({
      to: "manasx1upadhyay+website@gmail.com",
      name: "Manas Portfolio Website",
      subject: subject,
      replyTo: email,
      body: body,
      htmlBody: htmlBody
    });

    return ContentService
      .createTextOutput(JSON.stringify({ status: "success", message: "Transmission received" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);

  } finally {
    lock.releaseLock();
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: "active", message: "Contact service is online." }))
    .setMimeType(ContentService.MimeType.JSON);
}

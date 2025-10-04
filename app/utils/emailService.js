import emailjs from 'emailjs-com';

// Function to send notification email to Andrew
export const sendNotificationEmail = async (formData, formElement) => {
  try {
    const result = await emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, // Template for Andrew's notification
      formElement,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    );
    
    console.log('Notification email sent successfully:', result);
    return { success: true, result };
  } catch (error) {
    console.error('Notification email error:', error);
    return { success: false, error };
  }
};

// Function to send auto-reply email to client
export const sendAutoReplyEmail = async (formData) => {
  try {
    // Prepare data for auto-reply email to client
    const autoReplyData = {
      from_name: formData.name,  // Changed to match template
      from_email: formData.email,
      to_name: 'Andrew Nguyen',
      to_email: 'andrewng142@gmail.com',
      from_phone: formData.phone,
      service: formData.service,
      message: formData.message
    };

    console.log('Auto-reply data being sent:', autoReplyData);
    console.log('Template ID:', process.env.NEXT_PUBLIC_EMAILJS_AUTO_REPLY_TEMPLATE_ID);
    console.log('Service ID:', process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID);

    const result = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_AUTO_REPLY_TEMPLATE_ID,
      autoReplyData,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    );
    
    console.log('Auto-reply email sent successfully:', result);
    return { success: true, result };
  } catch (error) {
    console.error('Auto-reply email error:', error);
    return { success: false, error };
  }
};

// Function to send both emails
export const sendContactEmails = async (formData, formElement) => {
  try {
    // Send notification email first
    const notificationResult = await sendNotificationEmail(formData, formElement);
    
    if (notificationResult.success) {
      console.log('Notification email sent successfully');
      // Try to send auto-reply, but don't fail if it doesn't work
      try {
        const autoReplyResult = await sendAutoReplyEmail(formData);
        if (autoReplyResult.success) {
          console.log('Auto-reply email sent successfully');
        } else {
          console.warn('Auto-reply failed, but notification was sent:', autoReplyResult.error);
        }
      } catch (autoReplyError) {
        console.warn('Auto-reply failed, but notification was sent:', autoReplyError);
      }
      
      return { success: true, notificationResult };
    } else {
      console.error('Notification email failed');
      return { success: false, error: 'Failed to send notification email' };
    }
  } catch (error) {
    console.error('Error sending emails:', error);
    return { success: false, error };
  }
};

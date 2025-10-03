import emailjs from 'emailjs-com';

// Function to send notification email to Andrew
export const sendNotificationEmail = async (formData, formElement) => {
  try {
    const result = await emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      'template_59j4qam', // Template for Andrew's notification
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
      to_name: formData.name,
      to_email: formData.email,
      from_name: 'Andrew Nguyen',
      from_email: 'andrewng142@gmail.com',
      from_phone: formData.phone,
      service: formData.service,
      message: formData.message
    };

    console.log('Auto-reply data being sent:', autoReplyData);

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
    // Send both emails in parallel
    const [notificationResult, autoReplyResult] = await Promise.all([
      sendNotificationEmail(formData, formElement),
      sendAutoReplyEmail(formData)
    ]);

    // Check if both emails were successful
    const allSuccessful = notificationResult.success && autoReplyResult.success;
    
    if (allSuccessful) {
      console.log('Both emails sent successfully');
      return { success: true, notificationResult, autoReplyResult };
    } else {
      console.error('One or both emails failed');
      return { 
        success: false, 
        notificationResult, 
        autoReplyResult,
        error: 'One or both emails failed to send'
      };
    }
  } catch (error) {
    console.error('Error sending emails:', error);
    return { success: false, error };
  }
};

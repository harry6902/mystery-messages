import { resend } from "@/lib/resend";
import VerificationEmail from "../../Emails/verificationEmail";
import { ApiResponse } from "@/types/ApiResponse";

export async function sendVerificationEmail(
    email:string,
    username:string,
    verifyCode: string
): Promise<ApiResponse>{
   try {
    await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to:email,
        subject: 'Mystery messages Verification Code',
        react:VerificationEmail({username,otp:verifyCode}),
      });
    
    return {success:true, message: 'Verification email sent successfully'}
    
   } catch (emailError) {
    console.error("Error sending email Verification",emailError)
    return {success:false, message: 'Failed to send verification email'}
   }
}
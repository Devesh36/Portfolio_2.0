export default async function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).json({ message: 'Method not allowed' })
    }
  
    try {
      const { name, email, subject, message } = req.body
  
      // Add your email sending logic here
      // You can use services like SendGrid, NodeMailer, etc.
      
      // For now, we'll just simulate a successful response
      await new Promise(resolve => setTimeout(resolve, 1000))
  
      return res.status(200).json({ message: 'Message sent successfully' })
    } catch (error) {
      return res.status(500).json({ message: 'Failed to send message' })
    }
  }
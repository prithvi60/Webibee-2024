import { NextResponse,NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
    // Authorization check
    const authHeader = req.headers.get('Authorization');
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
      return new NextResponse('Unauthorized', { status: 401 });
    }
  
    // Your cron job logic here
    try {
      // Example task: logging a message
      console.log('Cron job executed in 2mins');
      return NextResponse.json({ message: 'Cron job executed successfully' });
    } catch (error) {
      console.error('Error executing cron job:', error);
      return new NextResponse('Internal Server Error', { status: 500 });
    }
  }
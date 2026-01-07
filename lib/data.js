// app/api/data/route.js
export async function GET(request) {
    const data = {
      message: "This is dynamic data",
      timestamp: Date.now(),
    };
  
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }
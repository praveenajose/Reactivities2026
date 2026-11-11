namespace API.Middleware;

public class ResponseHeaderMiddleware : IMiddleware
{
    public async Task InvokeAsync(HttpContext context, RequestDelegate next)
    {
        context.Response.OnStarting(() =>
        {
            context.Response.Headers["X-Custom-Header"] = "Reactivities";
            return Task.CompletedTask;
        });

        await next(context);
    }
}

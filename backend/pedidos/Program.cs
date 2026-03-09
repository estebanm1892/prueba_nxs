using pedidos.Mocks;

var builder = WebApplication.CreateBuilder(args);

var allowedOrigins = "_allowedOrigins";

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: allowedOrigins, policy =>
    {
        policy
            .WithOrigins(
                "http://localhost:4200",
                "http://localhost"
            )
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});

var app = builder.Build();

app.UseCors(allowedOrigins);

app.MapGet("/", () =>
{
    return Results.Ok(new
    {
        service = "pedidos-service",
        message = "Orders microservice is running"
    });
});

app.MapGet("/health", () =>
{
    return Results.Ok(new
    {
        status = "Healthy"
    });
});

app.MapGet("/status", () =>
{
    return Results.Ok(new
    {
        service = "pedidos-service",
        version = "1.0.0",
        environment = app.Environment.EnvironmentName,
        timestamp = DateTime.UtcNow,
        port = "8080"
    });
});

app.MapGet("/api/orders", () =>
{
    return Results.Ok(OrdersMock.GetOrders());
});

app.Run();
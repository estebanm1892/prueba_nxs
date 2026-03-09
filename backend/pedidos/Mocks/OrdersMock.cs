namespace pedidos.Mocks;

public static class OrdersMock
{
    public static object GetOrders()
    {
        return new[]
        {
            new
            {
                id = 1001,
                customer = "Juan Perez",
                total = 125.50m,
                status = "Pending"
            },
            new
            {
                id = 1002,
                customer = "Maria Gomez",
                total = 300.00m,
                status = "Completed"
            }
        };
    }
}
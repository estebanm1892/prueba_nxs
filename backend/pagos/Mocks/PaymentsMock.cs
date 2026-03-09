namespace pagos.Mocks;

public static class PaymentsMock
{
    public static object GetPayments()
    {
        return new[]
        {
            new
            {
                id = 5001,
                orderId = 1001,
                amount = 125.50m,
                status = "Approved"
            },
            new
            {
                id = 5002,
                orderId = 1002,
                amount = 300.00m,
                status = "Pending"
            }
        };
    }
}
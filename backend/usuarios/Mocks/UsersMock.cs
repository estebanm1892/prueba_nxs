namespace usuarios.Mocks;

public static class UsersMock
{
    public static object GetUsers()
    {
        return new[]
        {
            new
            {
                id = 1,
                name = "Admin User",
                email = "admin@abc.com",
                role = "admin"
            },
            new
            {
                id = 2,
                name = "Regular User",
                email = "user@abc.com",
                role = "user"
            }
        };
    }
}
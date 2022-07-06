using ElektronAPI.Models.Categories;
using ElektronAPI.Models.Identity;
using ElektronAPI.Models.OrderProducts;
using ElektronAPI.Models.Orders;
using ElektronAPI.Models.Pictures;
using ElektronAPI.Models.Products;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;

namespace ElektronAPI.Data
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public DbSet<Product> Products { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<Picture> Pictures { get; set; }
        public DbSet<OrderProduct> OrderProducts { get; set; }
        public DbSet<Order> Orders { get; set; }
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }
        #region Required
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            Picture picture1 = new Picture() { PictureId = 1, Uri = "", Alt = "Maybe" };
            Picture picture2 = new Picture() { PictureId = 2, Uri = "", Alt = "test" };
            Picture picture3 = new Picture() { PictureId = 3, Uri = "", Alt = "someone" };
            Category category = new Category() { CategoryId = 1, Name = "Datorer", PictureId = 1 };
            Product product1 = new Product() { ProductId = 1, Name = "Asus rog 1",CategoryId =1, ShortDescription = "Good computer", Description = "Amazing computer with 12 ram", Price = 600, PictureId = 1 };
            Product product2 = new Product() { ProductId = 2, Name = "Lenovo rog 1", CategoryId = 1, ShortDescription = "bad computer", Description = "useless computer with 2 ram", Price = 1 , PictureId = 2};
            Product product3 = new Product() { ProductId = 3, Name = "Samsung rog 1", CategoryId = 1, ShortDescription = "Imanginary computer", Description = "New in the bussnis mayby a scam", Price = 400 , PictureId = 3 };

            

            modelBuilder.Entity<Category>()
                .HasMany(e => e.Products)
                .WithOne(e => e.Category);
            modelBuilder.Entity<Product>()
                .HasOne(e => e.Category)
                .WithMany(e => e.Products);
            modelBuilder.Entity<Product>()
                .HasOne(e => e.Picture)
                .WithMany()
                .OnDelete(DeleteBehavior.SetNull);
            modelBuilder.Entity<Category>()
                .HasOne(e => e.Picture)
                .WithMany()
                .OnDelete(DeleteBehavior.SetNull);
            modelBuilder.Entity<OrderProduct>()
                .HasKey(e => new { e.OrderId, e.ProductId });
            modelBuilder.Entity<OrderProduct>()
                .HasOne(e => e.Order)
                .WithMany(e => e.OrderProducts);
            modelBuilder.Entity<OrderProduct>()
                .HasOne(e => e.Product)
                .WithMany(e => e.OrderProducts);
            modelBuilder.Entity<Order>()
                .HasOne(e => e.Customer)
                .WithMany(e => e.Orders);
            modelBuilder.Entity<ApplicationUser>()
                .HasMany(e => e.Orders)
                .WithOne(e => e.Customer);
            modelBuilder.Entity<Picture>().HasData(picture1, picture2, picture3);
            modelBuilder.Entity<Category>().HasData(category);
            modelBuilder.Entity<Product>().HasData(product1, product2, product3);

            string roleId = Guid.NewGuid().ToString();
            string userRoleId = Guid.NewGuid().ToString();
            string userId = Guid.NewGuid().ToString();
            modelBuilder.Entity<IdentityRole>().HasData(new IdentityRole
            {
                Id = roleId,
                Name = "Admin",
                NormalizedName = "ADMIN"
            });
            modelBuilder.Entity<IdentityRole>().HasData(new IdentityRole
            {
                Id = userRoleId,
                Name = "User",
                NormalizedName = "USER"
            });
            PasswordHasher<ApplicationUser> hasher = new PasswordHasher<ApplicationUser>();

            modelBuilder.Entity<ApplicationUser>().HasData(new ApplicationUser
            {
                Id = userId,
                Email = "admin@admin.com",
                NormalizedEmail = "ADMIN@ADMIN.COM",
                UserName = "admin@admin.com",
                NormalizedUserName = "ADMIN@ADMIN.COM",
                PasswordHash = hasher.HashPassword(null, "password")
            });
            modelBuilder.Entity<IdentityUserRole<String>>().HasData(new IdentityUserRole<string>
            {
                RoleId = roleId,
                UserId = userId
            });

            modelBuilder.Entity<Order>().HasData(new Order()
            {
                OrderId = 1,
                CustomerId = userId,
                Total = 600,
                timeDate = DateTime.Now
            });
            modelBuilder.Entity<OrderProduct>().HasData(new OrderProduct()
            {
                OrderProductId = 1,
                OrderId = 1,
                ProductId = 1,
                Price = 600,
                ProductName = "Asus rog 1",
                Quantity = 1
            });

        }
            #endregion
    }
}

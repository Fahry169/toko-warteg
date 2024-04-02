document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      { id: 1, name: "Tempe Goreng", img: "p1.png", price: 2000 },
      { id: 2, name: "Tahu Goreng", img: "p2.png", price: 2000 },
      { id: 3, name: "Telur Dadar", img: "p3.png", price: 5000 },
      { id: 4, name: "Nasi Putih", img: "p4.png", price: 5000 },
      { id: 5, name: "Tumis Kangkung", img: "p5.png", price: 3000 },
      { id: 6, name: "Kentang Balado", img: "p6.png", price: 3000 },
      { id: 7, name: "Tongkol Balado", img: "p7.png", price: 6000 },
      { id: 8, name: "Lele Goreng", img: "p8.png", price: 5000 },
      { id: 9, name: "Ayam Goreng", img: "p9.png", price: 7000 },
      { id: 10, name: "Perkedel", img: "p10.png", price: 2000 },
      { id: 11, name: "Sayur Asem", img: "p11.png", price: 3000 },
      { id: 12, name: "Sayur Sop", img: "p12.png", price: 3000 },
    ],
  }));

  Alpine.store('cart', {
    items: [],
    total: 0,
    quantity: 0,
    add(newItem) {
      const cartItem = this.items.find((item) => item.id === newItem.id);

      if (!cartItem) {
        this.items.push({...newItem, quantity: 1, total: newItem.price });
        this.quantity++;
        this.total += newItem.price;
      } else {
        this.items = this.items.map((item) => {
            if(item.id !== newItem.id) {
                return item;
            } else {
                item.quantity++;
                item.total = item.price * item.quantity;
                this.quantity++;
                this.total += item.price;
                return item;
            }
        });
      }
    },
    remove(id) {
        const cartItem = this.items.find((item) => item.id === id);

        if(cartItem.quantity > 1) {
            this.items = this.items.map((item) => {
                if(item.id !== id) {
                    return item;
                } else {
                    item.quantity--;
                    item.total = item.price * item.quantity;
                    this.quantity--;
                    this.total -= item.price;
                    return item;      
                }
            })
        } else if (cartItem.quantity === 1) {
            this.items = this.items.filter((item) => item.id !==id);
            this.quantity--;
            this.total -= cartItem.price;
        }
    }
  });
});

const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
};

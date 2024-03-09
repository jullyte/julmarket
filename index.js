class JulMarket {
    constructor(location, openingDate, closingDate) {
      this.location = location;
      this.openingDate = new Date(openingDate);
      this.closingDate = new Date(closingDate);
      this.vendorList = [];
    }
  
    addVendor(vendor) {
      this.vendorList.push(vendor);
      console.log(`Vendor ${vendor.name} added to the Jul Market.`);
    }
  
    displayMarketInfo() {
      console.log(`
        Jul Market at ${this.location}
        Opening Date: ${this.openingDate.toDateString()}
        Closing Date: ${this.closingDate.toDateString()}
        Number of Vendors: ${this.vendorList.length}
      `);
    }
  }
  
  class Vendor {
    constructor(name, products) {
      this.name = name;
      this.products = products;
    }
  }
  
  // Example usage
  const julMarketStockholm = new JulMarket('Stockholm', '2024-11-25', '2024-12-23');
  
  const vendor1 = new Vendor('Winter Wonderland Crafts', ['Handmade Ornaments', 'Holiday Decor']);
  const vendor2 = new Vendor('Santas Treats', ['Christmas Cookies', 'Hot Chocolate']);
  
  julMarketStockholm.addVendor(vendor1);
  julMarketStockholm.addVendor(vendor2);
  
  julMarketStockholm.displayMarketInfo();
  
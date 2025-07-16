# Invoice Generator

A modern, flexible invoice generation tool that creates professional PDF invoices with customizable templates and automated calculations.

## Features

- 📄 **PDF Generation**: Create professional PDF invoices
- 🎨 **Custom Templates**: Multiple invoice templates and themes
- 💰 **Automatic Calculations**: Tax, discounts, and totals computed automatically
- 📊 **Multiple Formats**: Support for various invoice formats (standard, service, product-based)
- 🌐 **Multi-currency**: Support for different currencies
- 📱 **Responsive Design**: Works on desktop and mobile devices
- 💾 **Data Export**: Export invoices in PDF, JSON, and CSV formats
- 🔍 **Invoice Search**: Find and manage invoices easily
- 📈 **Reports**: Generate financial reports and analytics

## Installation

### Prerequisites

- Node.js 16.x or higher
- npm or yarn package manager

### Quick Start

```bash
# Clone the repository
git clone https://github.com/yourusername/invoice-generator.git
cd invoice-generator

# Install dependencies
npm install

# Start the development server
npm start
```

### Using npm

```bash
npm install invoice-generator
```

### Using yarn

```bash
yarn add invoice-generator
```

## Usage

### Basic Example

```javascript
const InvoiceGenerator = require('invoice-generator');

const invoice = new InvoiceGenerator({
  from: {
    name: "Your Company Name",
    address: "123 Business St",
    city: "Business City",
    state: "BC",
    zip: "12345",
    country: "USA"
  },
  to: {
    name: "Client Name",
    address: "456 Client Ave",
    city: "Client City",
    state: "CC",
    zip: "67890",
    country: "USA"
  },
  invoice: {
    number: "INV-001",
    date: "2024-01-15",
    dueDate: "2024-02-15",
    currency: "USD"
  },
  items: [
    {
      description: "Web Development Services",
      quantity: 40,
      rate: 75.00,
      amount: 3000.00
    },
    {
      description: "Domain Registration",
      quantity: 1,
      rate: 15.00,
      amount: 15.00
    }
  ],
  tax: {
    rate: 0.08,
    description: "Sales Tax"
  },
  discount: {
    rate: 0.05,
    description: "Early Payment Discount"
  }
});

// Generate PDF
invoice.generatePDF('invoice-001.pdf');
```

### Advanced Configuration

```javascript
const invoice = new InvoiceGenerator({
  // ... basic configuration
  
  // Custom styling
  theme: {
    primaryColor: "#2563eb",
    secondaryColor: "#64748b",
    font: "Helvetica",
    fontSize: 12
  },
  
  // Logo and branding
  logo: {
    path: "./assets/logo.png",
    width: 150,
    height: 60
  },
  
  // Payment terms
  paymentTerms: "Net 30",
  
  // Notes
  notes: "Thank you for your business!",
  
  // Custom fields
  customFields: {
    "Project ID": "PRJ-2024-001",
    "Reference": "Contract #12345"
  }
});
```

## API Reference

### Constructor Options

| Option | Type | Required | Description |
|--------|------|----------|-------------|
| `from` | Object | Yes | Sender information |
| `to` | Object | Yes | Recipient information |
| `invoice` | Object | Yes | Invoice details |
| `items` | Array | Yes | Invoice line items |
| `tax` | Object | No | Tax configuration |
| `discount` | Object | No | Discount configuration |
| `theme` | Object | No | Custom styling options |
| `logo` | Object | No | Logo configuration |

### Methods

#### `generatePDF(filename)`
Generates a PDF invoice file.

**Parameters:**
- `filename` (string): Output filename for the PDF

**Returns:** Promise resolving to the generated PDF buffer

#### `generateJSON()`
Exports invoice data as JSON.

**Returns:** Object containing invoice data

#### `calculateTotals()`
Calculates subtotal, tax, discount, and total amounts.

**Returns:** Object with calculated totals

#### `validate()`
Validates invoice data for completeness and accuracy.

**Returns:** Boolean indicating validation success

## Templates

The invoice generator supports multiple templates:

- **Standard**: Professional business invoice
- **Modern**: Clean, minimalist design
- **Creative**: Colorful and branded
- **Service**: Optimized for service-based businesses
- **Product**: Designed for product sales

To use a specific template:

```javascript
const invoice = new InvoiceGenerator({
  // ... configuration
  template: "modern"
});
```

## Configuration

### Environment Variables

Create a `.env` file in your project root:

```env
# Default currency
DEFAULT_CURRENCY=USD

# Date format
DATE_FORMAT=YYYY-MM-DD

# Default tax rate
DEFAULT_TAX_RATE=0.08

# Company defaults
COMPANY_NAME=Your Company
COMPANY_ADDRESS=123 Business St
COMPANY_CITY=Business City
COMPANY_STATE=BC
COMPANY_ZIP=12345
```

### Configuration File

Create `invoice.config.js`:

```javascript
module.exports = {
  currency: 'USD',
  dateFormat: 'YYYY-MM-DD',
  theme: {
    primaryColor: '#2563eb',
    font: 'Helvetica'
  },
  templates: {
    default: 'standard',
    available: ['standard', 'modern', 'creative']
  }
};
```

## CLI Usage

The package includes a command-line interface:

```bash
# Generate invoice from JSON file
npx invoice-generator generate --input invoice-data.json --output invoice.pdf

# Generate with template
npx invoice-generator generate --input data.json --template modern --output invoice.pdf

# Validate invoice data
npx invoice-generator validate --input invoice-data.json
```

## Development

### Setup Development Environment

```bash
# Clone the repository
git clone https://github.com/yourusername/invoice-generator.git
cd invoice-generator

# Install dependencies
npm install

# Run tests
npm test

# Run in development mode
npm run dev
```

### Running Tests

```bash
# Run all tests
npm test

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm run test:watch
```

### Build for Production

```bash
npm run build
```

## Contributing

We welcome contributions! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Make your changes and add tests
4. Ensure all tests pass: `npm test`
5. Commit your changes: `git commit -m "Add new feature"`
6. Push to the branch: `git push origin feature/new-feature`
7. Submit a pull request

### Code Style

- Use ESLint configuration provided
- Follow Prettier formatting
- Write tests for new features
- Update documentation as needed

## Troubleshooting

### Common Issues

**PDF Generation Fails**
```bash
# Install required dependencies
npm install puppeteer canvas
```

**Template Not Found**
```javascript
// Check available templates
console.log(InvoiceGenerator.availableTemplates);
```

**Currency Formatting Issues**
```javascript
// Ensure proper currency configuration
const invoice = new InvoiceGenerator({
  // ...
  currency: 'USD',
  locale: 'en-US'
});
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

- 📧 Email: support@invoicegenerator.com
- 💬 Discord: [Join our community](https://discord.gg/invoice-generator)
- 📚 Documentation: [Full documentation](https://docs.invoicegenerator.com)
- 🐛 Bug Reports: [GitHub Issues](https://github.com/yourusername/invoice-generator/issues)

## Changelog

### v2.1.0 (2024-01-15)
- Added multi-currency support
- Improved PDF generation performance
- New modern template
- Bug fixes and stability improvements

### v2.0.0 (2023-12-01)
- Complete rewrite with TypeScript
- New template system
- Enhanced CLI interface
- Breaking changes in API

See [CHANGELOG.md](CHANGELOG.md) for full version history.

## Roadmap

- [ ] React component library
- [ ] Online invoice editor
- [ ] Integration with accounting software
- [ ] Mobile app
- [ ] Multi-language support
- [ ] Recurring invoices
- [ ] Payment gateway integration

---

Made with ❤️ by the Invoice Generator Team

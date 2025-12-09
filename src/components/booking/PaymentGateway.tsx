import { useState } from 'react';
import { CreditCard, Wallet, Building2, Banknote, Smartphone, Check, Copy, ExternalLink } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface PaymentGatewayProps {
  selectedMethod: string;
  onMethodChange: (method: string) => void;
  totalAmount: number;
}

const paymentMethods = [
  { id: 'cash', label: 'Cash', icon: Banknote, description: 'Pay upon check-in' },
  { id: 'gcash', label: 'GCash', icon: Smartphone, description: 'Mobile wallet' },
  { id: 'paypal', label: 'PayPal', icon: Wallet, description: 'Online payment' },
  { id: 'card', label: 'Credit Card', icon: CreditCard, description: 'Visa, Mastercard' },
  { id: 'bank', label: 'Bank Transfer', icon: Building2, description: 'Direct deposit' },
];

const PaymentGateway = ({ selectedMethod, onMethodChange, totalAmount }: PaymentGatewayProps) => {
  const [cardData, setCardData] = useState({
    number: '',
    name: '',
    expiry: '',
    cvv: '',
  });

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: 'Copied!',
      description: `${label} copied to clipboard`,
    });
  };

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    return parts.length ? parts.join(' ') : value;
  };

  const formatExpiry = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 2) {
      return v.substring(0, 2) + '/' + v.substring(2, 4);
    }
    return v;
  };

  return (
    <div className="space-y-6">
      {/* Payment Method Selection */}
      <div>
        <label className="block font-display text-sm text-forest mb-3 font-medium">
          Select Payment Method
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {paymentMethods.map((method) => (
            <button
              key={method.id}
              onClick={() => onMethodChange(method.id)}
              className={`relative flex flex-col items-center gap-2 p-4 rounded-organic border-2 transition-all ${
                selectedMethod === method.id
                  ? 'border-palm bg-palm/10 shadow-md'
                  : 'border-sand hover:border-palm/50 bg-sand/30'
              }`}
            >
              {selectedMethod === method.id && (
                <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-palm flex items-center justify-center">
                  <Check className="w-4 h-4 text-sand" />
                </div>
              )}
              <method.icon className={`w-6 h-6 ${selectedMethod === method.id ? 'text-palm' : 'text-forest/70'}`} />
              <span className={`font-display text-sm font-medium ${selectedMethod === method.id ? 'text-forest' : 'text-forest/70'}`}>
                {method.label}
              </span>
              <span className="font-body text-xs text-muted-foreground text-center">
                {method.description}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Payment Details Based on Selection */}
      <div className="p-6 rounded-organic bg-sand/50 border-2 border-palm/20">
        {/* Cash Payment */}
        {selectedMethod === 'cash' && (
          <div className="animate-fade-in space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-palm/20 flex items-center justify-center">
                <Banknote className="w-6 h-6 text-palm" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-forest">Pay with Cash</h3>
                <p className="font-body text-sm text-muted-foreground">Payment upon arrival</p>
              </div>
            </div>
            
            <div className="bg-cream p-4 rounded-lg border border-palm/10">
              <p className="font-body text-forest mb-3">
                💵 Pay the full amount at the front desk when you check in.
              </p>
              <ul className="space-y-2 font-body text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-palm" />
                  No advance payment required
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-palm" />
                  Present valid ID upon check-in
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-palm" />
                  Exact amount appreciated
                </li>
              </ul>
            </div>

            <div className="p-4 bg-palm/10 rounded-lg">
              <p className="font-display text-sm font-medium text-forest">Amount Due at Check-in:</p>
              <p className="font-display text-2xl font-bold text-palm">₱{totalAmount.toLocaleString()}</p>
            </div>
          </div>
        )}

        {/* GCash Payment */}
        {selectedMethod === 'gcash' && (
          <div className="animate-fade-in space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-[#007DFE]/20 flex items-center justify-center">
                <Smartphone className="w-6 h-6 text-[#007DFE]" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-forest">Pay with GCash</h3>
                <p className="font-body text-sm text-muted-foreground">Send to our GCash number</p>
              </div>
            </div>

            <div className="bg-cream p-4 rounded-lg border border-palm/10 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-body text-xs text-muted-foreground uppercase tracking-wide">GCash Number</p>
                  <p className="font-display text-lg font-semibold text-forest">0917 123 4567</p>
                </div>
                <button
                  onClick={() => copyToClipboard('09171234567', 'GCash number')}
                  className="p-2 rounded-lg bg-palm/10 hover:bg-palm/20 transition-colors"
                >
                  <Copy className="w-5 h-5 text-palm" />
                </button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-body text-xs text-muted-foreground uppercase tracking-wide">Account Name</p>
                  <p className="font-display text-lg font-semibold text-forest">CJ & Shan Resort</p>
                </div>
                <button
                  onClick={() => copyToClipboard('CJ & Shan Resort', 'Account name')}
                  className="p-2 rounded-lg bg-palm/10 hover:bg-palm/20 transition-colors"
                >
                  <Copy className="w-5 h-5 text-palm" />
                </button>
              </div>
            </div>

            <div className="p-4 bg-[#007DFE]/10 rounded-lg">
              <p className="font-display text-sm font-medium text-forest">Amount to Send:</p>
              <p className="font-display text-2xl font-bold text-[#007DFE]">₱{totalAmount.toLocaleString()}</p>
              <p className="font-body text-xs text-muted-foreground mt-2">
                📱 Please include your booking reference in the message
              </p>
            </div>
          </div>
        )}

        {/* PayPal Payment */}
        {selectedMethod === 'paypal' && (
          <div className="animate-fade-in space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-[#003087]/20 flex items-center justify-center">
                <Wallet className="w-6 h-6 text-[#003087]" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-forest">Pay with PayPal</h3>
                <p className="font-body text-sm text-muted-foreground">Secure online payment</p>
              </div>
            </div>

            <div className="bg-cream p-4 rounded-lg border border-palm/10 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-body text-xs text-muted-foreground uppercase tracking-wide">PayPal Email</p>
                  <p className="font-display text-lg font-semibold text-forest">pay@cjshanresort.com</p>
                </div>
                <button
                  onClick={() => copyToClipboard('pay@cjshanresort.com', 'PayPal email')}
                  className="p-2 rounded-lg bg-palm/10 hover:bg-palm/20 transition-colors"
                >
                  <Copy className="w-5 h-5 text-palm" />
                </button>
              </div>
            </div>

            <button className="w-full py-4 bg-[#0070BA] hover:bg-[#003087] text-white font-display font-semibold rounded-pill transition-colors flex items-center justify-center gap-2">
              <ExternalLink className="w-5 h-5" />
              Pay ₱{totalAmount.toLocaleString()} with PayPal
            </button>

            <p className="font-body text-xs text-center text-muted-foreground">
              You will be redirected to PayPal to complete your payment securely
            </p>
          </div>
        )}

        {/* Credit Card Payment */}
        {selectedMethod === 'card' && (
          <div className="animate-fade-in space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-palm/20 flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-palm" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-forest">Credit/Debit Card</h3>
                <p className="font-body text-sm text-muted-foreground">Visa, Mastercard, AMEX</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block font-display text-sm text-forest mb-2 font-medium">
                  Card Number
                </label>
                <input
                  type="text"
                  value={cardData.number}
                  onChange={(e) => setCardData({ ...cardData, number: formatCardNumber(e.target.value) })}
                  maxLength={19}
                  placeholder="1234 5678 9012 3456"
                  className="w-full px-4 py-3 bg-cream border-2 border-palm/20 rounded-lg font-body text-forest focus:outline-none focus:border-palm transition-colors"
                />
              </div>

              <div>
                <label className="block font-display text-sm text-forest mb-2 font-medium">
                  Cardholder Name
                </label>
                <input
                  type="text"
                  value={cardData.name}
                  onChange={(e) => setCardData({ ...cardData, name: e.target.value.toUpperCase() })}
                  placeholder="JUAN DELA CRUZ"
                  className="w-full px-4 py-3 bg-cream border-2 border-palm/20 rounded-lg font-body text-forest focus:outline-none focus:border-palm transition-colors uppercase"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-display text-sm text-forest mb-2 font-medium">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    value={cardData.expiry}
                    onChange={(e) => setCardData({ ...cardData, expiry: formatExpiry(e.target.value) })}
                    maxLength={5}
                    placeholder="MM/YY"
                    className="w-full px-4 py-3 bg-cream border-2 border-palm/20 rounded-lg font-body text-forest focus:outline-none focus:border-palm transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-display text-sm text-forest mb-2 font-medium">
                    CVV
                  </label>
                  <input
                    type="password"
                    value={cardData.cvv}
                    onChange={(e) => setCardData({ ...cardData, cvv: e.target.value.replace(/\D/g, '').slice(0, 4) })}
                    maxLength={4}
                    placeholder="•••"
                    className="w-full px-4 py-3 bg-cream border-2 border-palm/20 rounded-lg font-body text-forest focus:outline-none focus:border-palm transition-colors"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-palm/10 rounded-lg">
              <div className="flex gap-2">
                <div className="w-10 h-6 bg-[#1A1F71] rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold italic">VISA</span>
                </div>
                <div className="w-10 h-6 bg-gradient-to-r from-[#EB001B] to-[#F79E1B] rounded flex items-center justify-center">
                  <div className="flex">
                    <div className="w-3 h-3 rounded-full bg-[#EB001B] opacity-80"></div>
                    <div className="w-3 h-3 rounded-full bg-[#F79E1B] -ml-1 opacity-80"></div>
                  </div>
                </div>
              </div>
              <span className="font-body text-xs text-forest">Secured with SSL encryption</span>
            </div>
          </div>
        )}

        {/* Bank Transfer Payment */}
        {selectedMethod === 'bank' && (
          <div className="animate-fade-in space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-forest/20 flex items-center justify-center">
                <Building2 className="w-6 h-6 text-forest" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-forest">Bank Transfer</h3>
                <p className="font-body text-sm text-muted-foreground">Direct bank deposit</p>
              </div>
            </div>

            <div className="bg-cream p-4 rounded-lg border border-palm/10 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-body text-xs text-muted-foreground uppercase tracking-wide">Bank Name</p>
                  <p className="font-display text-lg font-semibold text-forest">BDO Unibank</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-body text-xs text-muted-foreground uppercase tracking-wide">Account Number</p>
                  <p className="font-display text-lg font-semibold text-forest">0012 3456 7890</p>
                </div>
                <button
                  onClick={() => copyToClipboard('001234567890', 'Account number')}
                  className="p-2 rounded-lg bg-palm/10 hover:bg-palm/20 transition-colors"
                >
                  <Copy className="w-5 h-5 text-palm" />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-body text-xs text-muted-foreground uppercase tracking-wide">Account Name</p>
                  <p className="font-display text-lg font-semibold text-forest">CJ & Shan Grand Resort Inc.</p>
                </div>
                <button
                  onClick={() => copyToClipboard('CJ & Shan Grand Resort Inc.', 'Account name')}
                  className="p-2 rounded-lg bg-palm/10 hover:bg-palm/20 transition-colors"
                >
                  <Copy className="w-5 h-5 text-palm" />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-body text-xs text-muted-foreground uppercase tracking-wide">Swift Code</p>
                  <p className="font-display text-lg font-semibold text-forest">BNORPHMM</p>
                </div>
                <button
                  onClick={() => copyToClipboard('BNORPHMM', 'Swift code')}
                  className="p-2 rounded-lg bg-palm/10 hover:bg-palm/20 transition-colors"
                >
                  <Copy className="w-5 h-5 text-palm" />
                </button>
              </div>
            </div>

            <div className="p-4 bg-forest/10 rounded-lg">
              <p className="font-display text-sm font-medium text-forest">Total Transfer Amount:</p>
              <p className="font-display text-2xl font-bold text-forest">₱{totalAmount.toLocaleString()}</p>
              <p className="font-body text-xs text-muted-foreground mt-2">
                🏦 Please email proof of payment to bookings@cjshanresort.com
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentGateway;

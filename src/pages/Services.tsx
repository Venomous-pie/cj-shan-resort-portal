import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { UtensilsCrossed, Sparkles, ShoppingBag, Waves, Plus, Minus, ShoppingCart, X, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ServiceItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image?: string;
}

const Services = () => {
  const { toast } = useToast();
  const [cart, setCart] = useState<{ item: ServiceItem; quantity: number }[]>([]);
  const [specialRequest, setSpecialRequest] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false);

  const categories = [
    { id: "food", label: "Food & Drinks", icon: UtensilsCrossed },
    { id: "hygiene", label: "Hygiene & Care", icon: Sparkles },
    { id: "essentials", label: "Essentials", icon: ShoppingBag },
    { id: "activities", label: "Activities", icon: Waves },
  ];

  const items: ServiceItem[] = [
    // Food & Drinks
    { id: "f1", name: "Filipino Breakfast Set", description: "Tapsilog with garlic rice, sunny-side egg, and coffee", price: 350, category: "food" },
    { id: "f2", name: "Fresh Fruit Platter", description: "Seasonal tropical fruits - mango, papaya, watermelon", price: 280, category: "food" },
    { id: "f3", name: "Grilled Seafood Platter", description: "Fresh catch of the day with sides", price: 850, category: "food" },
    { id: "f4", name: "Halo-Halo Special", description: "Traditional Filipino shaved ice dessert", price: 180, category: "food" },
    { id: "f5", name: "Fresh Buko Juice", description: "Freshly opened young coconut", price: 120, category: "food" },
    { id: "f6", name: "Coffee & Pastries Set", description: "Local brew with assorted pandesal", price: 220, category: "food" },
    // Hygiene & Care
    { id: "h1", name: "Toiletry Kit", description: "Toothbrush, toothpaste, soap, shampoo", price: 150, category: "hygiene" },
    { id: "h2", name: "Sunscreen SPF50", description: "Reef-safe sun protection 100ml", price: 280, category: "hygiene" },
    { id: "h3", name: "Insect Repellent", description: "Natural citronella spray", price: 180, category: "hygiene" },
    { id: "h4", name: "After-Sun Lotion", description: "Aloe vera soothing gel", price: 220, category: "hygiene" },
    { id: "h5", name: "First Aid Kit", description: "Basic medical supplies", price: 350, category: "hygiene" },
    // Essentials
    { id: "e1", name: "Beach Towel", description: "Large cotton beach towel", price: 200, category: "essentials" },
    { id: "e2", name: "Snorkeling Gear", description: "Mask and snorkel set rental", price: 300, category: "essentials" },
    { id: "e3", name: "Waterproof Phone Pouch", description: "Keep your phone safe underwater", price: 180, category: "essentials" },
    { id: "e4", name: "Beach Mat", description: "Portable woven mat", price: 250, category: "essentials" },
    { id: "e5", name: "Flip Flops", description: "Comfortable rubber slippers", price: 180, category: "essentials" },
    // Activities
    { id: "a1", name: "Kayak Rental (1 hour)", description: "Single or double kayak", price: 400, category: "activities" },
    { id: "a2", name: "Island Hopping Tour", description: "Half-day guided tour with lunch", price: 1500, category: "activities" },
    { id: "a3", name: "Sunset Cruise", description: "Evening boat ride with snacks", price: 800, category: "activities" },
    { id: "a4", name: "Spa Massage (1 hour)", description: "Traditional hilot massage", price: 600, category: "activities" },
    { id: "a5", name: "Fishing Trip", description: "Early morning fishing experience", price: 1200, category: "activities" },
  ];

  const addToCart = (item: ServiceItem) => {
    setCart((prev) => {
      const existing = prev.find((c) => c.item.id === item.id);
      if (existing) {
        return prev.map((c) => (c.item.id === item.id ? { ...c, quantity: c.quantity + 1 } : c));
      }
      return [...prev, { item, quantity: 1 }];
    });
    toast({
      title: "Added to cart",
      description: `${item.name} added to your order`,
    });
  };

  const updateQuantity = (itemId: string, delta: number) => {
    setCart((prev) => {
      return prev
        .map((c) => {
          if (c.item.id === itemId) {
            const newQty = c.quantity + delta;
            return newQty > 0 ? { ...c, quantity: newQty } : null;
          }
          return c;
        })
        .filter(Boolean) as { item: ServiceItem; quantity: number }[];
    });
  };

  const removeFromCart = (itemId: string) => {
    setCart((prev) => prev.filter((c) => c.item.id !== itemId));
  };

  const cartTotal = cart.reduce((sum, c) => sum + c.item.price * c.quantity, 0);
  const cartCount = cart.reduce((sum, c) => sum + c.quantity, 0);

  const handleSubmitOrder = () => {
    if (cart.length === 0) {
      toast({
        title: "Cart is empty",
        description: "Please add items to your cart first",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Order Submitted!",
      description: "Our staff will process your order shortly. Thank you!",
    });
    setCart([]);
    setSpecialRequest("");
    setIsCartOpen(false);
  };

  const getCategoryItems = (categoryId: string) => items.filter((i) => i.category === categoryId);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="relative py-16 bg-gradient-to-br from-primary/10 via-background to-secondary/20 overflow-hidden">
          <div className="absolute top-10 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl" />

          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
              Guest Services & Orders
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Order food, essentials, and book activities right from your room. We'll deliver straight to you!
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="container mx-auto px-4 py-12">
          <Tabs defaultValue="food" className="space-y-8">
            <TabsList className="bg-card border border-border/50 p-1 rounded-xl flex-wrap h-auto gap-1">
              {categories.map((cat) => (
                <TabsTrigger
                  key={cat.id}
                  value={cat.id}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg px-4 py-2 flex items-center gap-2"
                >
                  <cat.icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{cat.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((cat) => (
              <TabsContent key={cat.id} value={cat.id} className="space-y-6">
                <h2 className="font-serif text-2xl text-foreground flex items-center gap-3">
                  <cat.icon className="w-6 h-6 text-primary" />
                  {cat.label}
                </h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {getCategoryItems(cat.id).map((item) => {
                    const inCart = cart.find((c) => c.item.id === item.id);
                    return (
                      <Card key={item.id} className="bg-card border-border/50 overflow-hidden group hover:shadow-lg transition-all hover:border-primary/30">
                        <div className="h-32 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                          <cat.icon className="w-12 h-12 text-primary/40 group-hover:scale-110 transition-transform" />
                        </div>
                        <CardContent className="p-5">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-serif text-lg text-foreground">{item.name}</h3>
                            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                              ₱{item.price}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-4">{item.description}</p>

                          {inCart ? (
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3 bg-muted rounded-lg p-1">
                                <Button
                                  size="icon"
                                  variant="ghost"
                                  className="h-8 w-8"
                                  onClick={() => updateQuantity(item.id, -1)}
                                >
                                  <Minus className="w-4 h-4" />
                                </Button>
                                <span className="font-medium w-6 text-center">{inCart.quantity}</span>
                                <Button
                                  size="icon"
                                  variant="ghost"
                                  className="h-8 w-8"
                                  onClick={() => updateQuantity(item.id, 1)}
                                >
                                  <Plus className="w-4 h-4" />
                                </Button>
                              </div>
                              <p className="font-bold text-primary">₱{item.price * inCart.quantity}</p>
                            </div>
                          ) : (
                            <Button
                              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                              onClick={() => addToCart(item)}
                            >
                              <Plus className="w-4 h-4 mr-2" /> Add to Order
                            </Button>
                          )}
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </section>
      </main>

      {/* Floating Cart Button */}
      <button
        onClick={() => setIsCartOpen(true)}
        className="fixed bottom-6 right-6 bg-primary text-primary-foreground p-4 rounded-full shadow-lg hover:bg-primary/90 transition-all hover:scale-105 z-40"
      >
        <ShoppingCart className="w-6 h-6" />
        {cartCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
            {cartCount}
          </span>
        )}
      </button>

      {/* Cart Drawer */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setIsCartOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-card border-l border-border shadow-2xl flex flex-col">
            {/* Header */}
            <div className="p-6 border-b border-border flex items-center justify-between">
              <h2 className="font-serif text-2xl text-foreground flex items-center gap-3">
                <ShoppingCart className="w-6 h-6 text-primary" />
                Your Order
              </h2>
              <Button size="icon" variant="ghost" onClick={() => setIsCartOpen(false)}>
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-auto p-6 space-y-4">
              {cart.length === 0 ? (
                <div className="text-center py-12 text-muted-foreground">
                  <ShoppingBag className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>Your cart is empty</p>
                  <p className="text-sm">Browse our services and add items</p>
                </div>
              ) : (
                cart.map(({ item, quantity }) => (
                  <div key={item.id} className="flex gap-4 p-4 bg-muted/50 rounded-xl">
                    <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      {categories.find((c) => c.id === item.category)?.icon && (
                        <ShoppingBag className="w-6 h-6 text-primary/60" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-foreground truncate">{item.name}</h4>
                      <p className="text-sm text-muted-foreground">₱{item.price} each</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Button size="icon" variant="outline" className="h-7 w-7" onClick={() => updateQuantity(item.id, -1)}>
                          <Minus className="w-3 h-3" />
                        </Button>
                        <span className="w-8 text-center font-medium">{quantity}</span>
                        <Button size="icon" variant="outline" className="h-7 w-7" onClick={() => updateQuantity(item.id, 1)}>
                          <Plus className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-primary">₱{item.price * quantity}</p>
                      <Button size="icon" variant="ghost" className="h-7 w-7 mt-2 text-muted-foreground hover:text-destructive" onClick={() => removeFromCart(item.id)}>
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))
              )}

              {cart.length > 0 && (
                <div className="pt-4">
                  <label className="text-sm font-medium text-muted-foreground mb-2 block">
                    Special Requests (Optional)
                  </label>
                  <Textarea
                    placeholder="E.g., No onions, extra spicy, deliver at 7pm..."
                    value={specialRequest}
                    onChange={(e) => setSpecialRequest(e.target.value)}
                    className="bg-background border-border resize-none"
                    rows={3}
                  />
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-border space-y-4">
              <div className="flex justify-between items-center text-lg">
                <span className="text-muted-foreground">Total</span>
                <span className="font-bold text-foreground text-2xl">₱{cartTotal.toLocaleString()}</span>
              </div>
              <Button
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg"
                onClick={handleSubmitOrder}
                disabled={cart.length === 0}
              >
                <Send className="w-5 h-5 mr-2" />
                Submit Order
              </Button>
              <p className="text-xs text-center text-muted-foreground">
                Orders will be charged to your room and delivered shortly
              </p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Services;

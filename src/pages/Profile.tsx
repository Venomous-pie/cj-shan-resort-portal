import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar, User, Mail, Phone, MapPin, CreditCard, Clock, Bed, Users, Edit2, Save } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Profile = () => {
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    firstName: "Juan",
    lastName: "Dela Cruz",
    email: "juan.delacruz@email.com",
    phone: "+63 912 345 6789",
    address: "123 Mango Street, Manila, Philippines",
  });

  // Mock booking data
  const bookings = [
    {
      id: "BK-2024-001",
      room: "Deluxe Ocean View",
      checkIn: "2024-12-15",
      checkOut: "2024-12-18",
      guests: 2,
      status: "confirmed",
      total: 15000,
    },
    {
      id: "BK-2024-002",
      room: "Family Suite",
      checkIn: "2024-11-20",
      checkOut: "2024-11-22",
      guests: 4,
      status: "completed",
      total: 12000,
    },
    {
      id: "BK-2024-003",
      room: "Garden Room",
      checkIn: "2024-10-05",
      checkOut: "2024-10-07",
      guests: 2,
      status: "cancelled",
      total: 6000,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-primary/20 text-primary border-primary/30";
      case "completed":
        return "bg-accent/20 text-accent-foreground border-accent/30";
      case "cancelled":
        return "bg-destructive/20 text-destructive border-destructive/30";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const handleSave = () => {
    setIsEditing(false);
    toast({
      title: "Profile Updated",
      description: "Your information has been saved successfully.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="relative py-16 bg-gradient-to-br from-primary/10 via-background to-secondary/20 overflow-hidden">
          <div className="absolute top-10 right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-primary/20 border-4 border-primary/30 flex items-center justify-center">
                <User className="w-12 h-12 md:w-16 md:h-16 text-primary" />
              </div>
              <div className="text-center md:text-left">
                <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-2">
                  Welcome back, {profile.firstName}!
                </h1>
                <p className="text-muted-foreground">Manage your bookings and profile</p>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="container mx-auto px-4 py-12">
          <Tabs defaultValue="bookings" className="space-y-8">
            <TabsList className="bg-card border border-border/50 p-1 rounded-xl">
              <TabsTrigger value="bookings" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg px-6">
                My Bookings
              </TabsTrigger>
              <TabsTrigger value="profile" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg px-6">
                Profile Info
              </TabsTrigger>
            </TabsList>

            {/* Bookings Tab */}
            <TabsContent value="bookings" className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="font-serif text-2xl text-foreground">Your Reservations</h2>
                <Link to="/booking">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    Book New Stay
                  </Button>
                </Link>
              </div>

              <div className="grid gap-6">
                {bookings.map((booking) => (
                  <Card key={booking.id} className="bg-card border-border/50 overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="flex flex-col lg:flex-row">
                      <div className="lg:w-48 h-32 lg:h-auto bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                        <Bed className="w-12 h-12 text-primary/60" />
                      </div>
                      <CardContent className="flex-1 p-6">
                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                          <div className="space-y-3">
                            <div className="flex items-center gap-3">
                              <h3 className="font-serif text-xl text-foreground">{booking.room}</h3>
                              <Badge className={`${getStatusColor(booking.status)} capitalize`}>
                                {booking.status}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">Booking ID: {booking.id}</p>
                            <div className="flex flex-wrap gap-4 text-sm">
                              <div className="flex items-center gap-2 text-muted-foreground">
                                <Calendar className="w-4 h-4" />
                                <span>{booking.checkIn} → {booking.checkOut}</span>
                              </div>
                              <div className="flex items-center gap-2 text-muted-foreground">
                                <Users className="w-4 h-4" />
                                <span>{booking.guests} Guests</span>
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-2xl font-bold text-primary">₱{booking.total.toLocaleString()}</p>
                            <p className="text-sm text-muted-foreground">Total Amount</p>
                            {booking.status === "confirmed" && (
                              <Link to="/services">
                                <Button variant="outline" size="sm" className="mt-3 border-primary/30 text-primary hover:bg-primary/10">
                                  Order Services
                                </Button>
                              </Link>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Profile Tab */}
            <TabsContent value="profile" className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="font-serif text-2xl text-foreground">Personal Information</h2>
                <Button
                  variant={isEditing ? "default" : "outline"}
                  onClick={isEditing ? handleSave : () => setIsEditing(true)}
                  className={isEditing ? "bg-primary text-primary-foreground" : "border-primary/30 text-primary"}
                >
                  {isEditing ? <><Save className="w-4 h-4 mr-2" /> Save Changes</> : <><Edit2 className="w-4 h-4 mr-2" /> Edit Profile</>}
                </Button>
              </div>

              <Card className="bg-card border-border/50">
                <CardContent className="p-6 md:p-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label className="text-muted-foreground flex items-center gap-2">
                        <User className="w-4 h-4" /> First Name
                      </Label>
                      {isEditing ? (
                        <Input
                          value={profile.firstName}
                          onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
                          className="bg-background border-border"
                        />
                      ) : (
                        <p className="text-foreground font-medium py-2">{profile.firstName}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label className="text-muted-foreground flex items-center gap-2">
                        <User className="w-4 h-4" /> Last Name
                      </Label>
                      {isEditing ? (
                        <Input
                          value={profile.lastName}
                          onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
                          className="bg-background border-border"
                        />
                      ) : (
                        <p className="text-foreground font-medium py-2">{profile.lastName}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label className="text-muted-foreground flex items-center gap-2">
                        <Mail className="w-4 h-4" /> Email Address
                      </Label>
                      {isEditing ? (
                        <Input
                          type="email"
                          value={profile.email}
                          onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                          className="bg-background border-border"
                        />
                      ) : (
                        <p className="text-foreground font-medium py-2">{profile.email}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label className="text-muted-foreground flex items-center gap-2">
                        <Phone className="w-4 h-4" /> Phone Number
                      </Label>
                      {isEditing ? (
                        <Input
                          value={profile.phone}
                          onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                          className="bg-background border-border"
                        />
                      ) : (
                        <p className="text-foreground font-medium py-2">{profile.phone}</p>
                      )}
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label className="text-muted-foreground flex items-center gap-2">
                        <MapPin className="w-4 h-4" /> Address
                      </Label>
                      {isEditing ? (
                        <Input
                          value={profile.address}
                          onChange={(e) => setProfile({ ...profile, address: e.target.value })}
                          className="bg-background border-border"
                        />
                      ) : (
                        <p className="text-foreground font-medium py-2">{profile.address}</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <div className="grid sm:grid-cols-3 gap-4">
                <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
                  <CardContent className="p-6 text-center">
                    <CreditCard className="w-8 h-8 text-primary mx-auto mb-2" />
                    <p className="text-2xl font-bold text-foreground">₱33,000</p>
                    <p className="text-sm text-muted-foreground">Total Spent</p>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20">
                  <CardContent className="p-6 text-center">
                    <Calendar className="w-8 h-8 text-primary mx-auto mb-2" />
                    <p className="text-2xl font-bold text-foreground">3</p>
                    <p className="text-sm text-muted-foreground">Total Bookings</p>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
                  <CardContent className="p-6 text-center">
                    <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
                    <p className="text-2xl font-bold text-foreground">7</p>
                    <p className="text-sm text-muted-foreground">Nights Stayed</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Profile;

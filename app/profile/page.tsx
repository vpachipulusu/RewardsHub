import { ProfileHeader } from '@/components/profile/profile-header';
import { PaymentDetails } from '@/components/profile/payment-details';
import { AccountSettings } from '@/components/profile/account-settings';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function ProfilePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <ProfileHeader />
      <Tabs defaultValue="payment" className="mt-6">
        <TabsList>
          <TabsTrigger value="payment">Payment Details</TabsTrigger>
          <TabsTrigger value="settings">Account Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="payment">
          <PaymentDetails />
        </TabsContent>
        <TabsContent value="settings">
          <AccountSettings />
        </TabsContent>
      </Tabs>
    </div>
  );
}
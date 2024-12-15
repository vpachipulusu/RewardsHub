'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/components/ui/use-toast';
import { useAuth } from '@/lib/auth-context';
import { useForm } from '@/lib/hooks/use-form';
import { profileSchema, passwordSchema, type ProfileSchema, type PasswordSchema } from '@/lib/utils/validation';

export function AccountSettings() {
  const { user } = useAuth();
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);

  const {
    values: profileValues,
    errors: profileErrors,
    isSubmitting: isProfileSubmitting,
    handleChange: handleProfileChange,
    handleSubmit: handleProfileSubmit,
  } = useForm<ProfileSchema>(
    {
      name: user?.name || '',
      email: user?.email || '',
      bio: '',
    },
    {
      schema: profileSchema,
      onSubmit: async (data) => {
        try {
          // TODO: Implement profile update
          toast({
            title: 'Success',
            description: 'Your profile has been updated.',
          });
          setIsEditing(false);
        } catch (error) {
          toast({
            title: 'Error',
            description: 'Failed to update profile.',
            variant: 'destructive',
          });
        }
      },
    }
  );

  const {
    values: passwordValues,
    errors: passwordErrors,
    isSubmitting: isPasswordSubmitting,
    handleChange: handlePasswordChange,
    handleSubmit: handlePasswordSubmit,
  } = useForm<PasswordSchema>(
    {
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
    {
      schema: passwordSchema,
      onSubmit: async (data) => {
        try {
          // TODO: Implement password update
          toast({
            title: 'Success',
            description: 'Your password has been updated.',
          });
        } catch (error) {
          toast({
            title: 'Error',
            description: 'Failed to update password.',
            variant: 'destructive',
          });
        }
      },
    }
  );

  if (!user) return null;

  return (
    <Tabs defaultValue="profile" className="space-y-4">
      <TabsList>
        <TabsTrigger value="profile">Profile</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="notifications">Notifications</TabsTrigger>
      </TabsList>

      <TabsContent value="profile">
        <Card>
          <CardHeader>
            <CardTitle>Profile Information</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleProfileSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={profileValues.name}
                  onChange={(e) => handleProfileChange('name', e.target.value)}
                  disabled={!isEditing}
                  error={profileErrors.name}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={profileValues.email}
                  onChange={(e) => handleProfileChange('email', e.target.value)}
                  disabled={!isEditing}
                  error={profileErrors.email}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Input
                  id="bio"
                  value={profileValues.bio}
                  onChange={(e) => handleProfileChange('bio', e.target.value)}
                  disabled={!isEditing}
                  error={profileErrors.bio}
                />
              </div>

              <div className="flex justify-end space-x-2">
                {isEditing ? (
                  <>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setIsEditing(false)}
                      disabled={isProfileSubmitting}
                    >
                      Cancel
                    </Button>
                    <Button type="submit" disabled={isProfileSubmitting}>
                      {isProfileSubmitting ? 'Saving...' : 'Save Changes'}
                    </Button>
                  </>
                ) : (
                  <Button type="button" onClick={() => setIsEditing(true)}>
                    Edit Profile
                  </Button>
                )}
              </div>
            </form>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Change Password</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handlePasswordSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="currentPassword">Current Password</Label>
                <Input
                  id="currentPassword"
                  type="password"
                  value={passwordValues.currentPassword}
                  onChange={(e) => handlePasswordChange('currentPassword', e.target.value)}
                  error={passwordErrors.currentPassword}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="newPassword">New Password</Label>
                <Input
                  id="newPassword"
                  type="password"
                  value={passwordValues.newPassword}
                  onChange={(e) => handlePasswordChange('newPassword', e.target.value)}
                  error={passwordErrors.newPassword}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm New Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  value={passwordValues.confirmPassword}
                  onChange={(e) => handlePasswordChange('confirmPassword', e.target.value)}
                  error={passwordErrors.confirmPassword}
                />
              </div>

              <div className="flex justify-end">
                <Button type="submit" disabled={isPasswordSubmitting}>
                  {isPasswordSubmitting ? 'Updating...' : 'Update Password'}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="notifications">
        <Card>
          <CardHeader>
            <CardTitle>Notification Preferences</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Email Notifications</Label>
                <p className="text-sm text-muted-foreground">
                  Receive emails about your account activity
                </p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>New Deals</Label>
                <p className="text-sm text-muted-foreground">
                  Get notified about new deals from your favorite retailers
                </p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Cashback Updates</Label>
                <p className="text-sm text-muted-foreground">
                  Receive updates about your cashback earnings and payments
                </p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Marketing Communications</Label>
                <p className="text-sm text-muted-foreground">
                  Receive promotional offers and newsletters
                </p>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
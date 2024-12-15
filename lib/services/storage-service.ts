export class StorageService {
  private isClient = typeof window !== 'undefined';

  get<T>(key: string, defaultValue: T): T {
    if (!this.isClient) return defaultValue;
    
    try {
      const item = window.localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : defaultValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return defaultValue;
    }
  }

  set<T>(key: string, value: T): void {
    if (!this.isClient) return;
    
    try {
      const serialized = JSON.stringify(value);
      window.localStorage.setItem(key, serialized);
      
      // Also set as cookie for middleware
      document.cookie = `${key}=${encodeURIComponent(serialized)}; path=/; max-age=604800`; // 7 days
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  }

  remove(key: string): void {
    if (!this.isClient) return;
    
    try {
      window.localStorage.removeItem(key);
      document.cookie = `${key}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
    } catch (error) {
      console.error(`Error removing localStorage key "${key}":`, error);
    }
  }

  clear(): void {
    if (!this.isClient) return;
    
    try {
      window.localStorage.clear();
      document.cookie.split(';').forEach(cookie => {
        document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`);
      });
    } catch (error) {
      console.error('Error clearing storage:', error);
    }
  }
}

export const storage = new StorageService();
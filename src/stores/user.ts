import { defineStore } from 'pinia';

interface User {
  id: number;
  name: string;
  // Add more properties as needed
}

export const useUserStore = defineStore('user', {
  state: () => ({
    users: [] as User[],
    currentUser: null as User | null,
    isUsersLoaded: false,
  }),
  actions: {
    async fetchUsers() {
      if (this.isUsersLoaded) {
        return;
      }

      try {
        const response = await fetch('/api/users');
        const data = await response.json();
        this.users = data;
        this.isUsersLoaded = true;
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    },

    async createUser(user: User) {
      try {
        const response = await fetch('/api/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(user),
        });
        const data = await response.json();
        this.users.push(data);
      } catch (error) {
        console.error('Error creating user:', error);
      }
    },

    async updateUser(user: User) {
      try {
        const response = await fetch(`/api/users/${user.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(user),
        });
        const data = await response.json();
        const index = this.users.findIndex((u) => u.id === user.id);
        this.users[index] = data;
      } catch (error) {
        console.error('Error updating user:', error);
      }
    },

    async deleteUser(userId: number) {
      try {
        await fetch(`/api/users/${userId}`, {
          method: 'DELETE',
        });
        this.users = this.users.filter((u) => u.id !== userId);
      } catch (error) {
        console.error('Error deleting user:', error);
      }
    },

    setCurrentUser(user: User | null) {
      this.currentUser = user;
    },
  },
});

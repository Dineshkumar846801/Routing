export class UserService {
  getDetails(id: string) {
    if (id === '1') {
      return {
        id: '1',
        name: 'Leela',
      };
    } else {
      return {
        id: '1',
        name: 'Krishna',
      };
    }
  }
}

export class AccountsService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active',
    },
    {
      name: 'Bachelor Account',
      status: 'inactive',
    },
    {
      name: 'Teacher Account',
      status: 'unknown'
    },
  ];
  addAccount(name: string, status: string) {
    this.accounts.push({name: name, status: status});
  }

  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
  }
}

import expect from 'expect';
import User from '../userModel/userModel';

const Response = { w3:
    { ig: 'prime', U3: 'prime@gmail', Paa: 'www.prime.com' }
};
describe('test for user model', () => {
  it('should exist', () => {
    expect(User).toBeAn('object');
  });
  it('should log the User in, ', () => {
    User.login(Response);
    expect(User.isLogin).toNotBe(undefined);
  });
  it('should log out the user', () => {
    User.logOut();
    expect(User.isLogin).toEqual(false);
  });
});

import { Page, Locator, expect} from "@playwright/test";
export class LoginPage{
    readonly page: Page; 
    readonly alerta: Locator;

    constructor(page: Page){
        this.page = page;
        this.alerta = page.locator('.alert');
    }
    async accessarSite(){
        await this.page.goto('https://www.saucedemo.com/');
        await expect(this.page).toHaveTitle('Swag Labs');
    
    }
    async login(email:string, password:string){
        await this.page.locator('#user-name').fill(email);
        await this.page.getByLabel('Password').fill(password);
        await this.page.getByRole('button', { name: 'login-button' }).click();
    }
}

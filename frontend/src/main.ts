import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { provideRouter } from "@angular/router";
import { routes } from "./app/app.routes";

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), // Registra as rotas no app
  ],
}).catch((err) => console.error(err));

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { ClipboardModule } from 'ngx-clipboard';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { StartScreenComponent } from './start-screen/start-screen.component';
import { GameComponent } from './game/game.component';
import { GameDashboardComponent } from './game-dashboard/game-dashboard.component';
import { HighScoreComponent } from './high-score/high-score.component';

import { AppStateService } from './services/app-state.service';
import { AudioService } from './services/audio.service';
import { EventPublisherService } from './services/event-publisher.service';

import { ScaleToWidthDirective } from './scale-to-width.directive';

@NgModule({
  declarations: [
    AppComponent,
    StartScreenComponent,
    GameComponent,
    GameDashboardComponent,
    ScaleToWidthDirective,
    HighScoreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ClipboardModule,
    MaterialModule.forRoot(),
  ],
  providers: [
    AppStateService,
    AudioService,
    EventPublisherService,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

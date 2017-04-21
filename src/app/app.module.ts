import {NgModule} from "@angular/core";
import {IonicApp, IonicModule, Platform} from "ionic-angular";
import {CookingApp} from "./app.component";
import {IngredientComponent} from "./components/ingredient/ingredient.component";
import {ScreenService} from "./services/screen-service";
import {RecipeService} from "./services/recipe-service";
import {Configuration} from "./app.configuration";
import {StepComponent} from "./pages/steps/step/step.component";
import {RecipeCompletedPage} from "./pages/recipe-completed/recipe-completed.page";
import {WindowRef} from "./services/window-ref";
import {RecipeSelectionPage} from "./pages/recipe-selection/recipe-selection.page";
import {RecipeDetailPage} from "./pages/recipe-detail/recipe-detail.page";
import {ValuesPipe} from "./pages/recipe-detail/values.pipe";
import {StepsPage} from "./pages/steps/steps.page";
import {Store, StoreModule} from "@ngrx/store";
import {recipesReducer} from "./reducers/recipes.reducer";
import {RecipesActions} from "./actions/recipes.actions";
import {SelectedRecipeActions} from "./actions/selectedRecipe.actions";
import {selectedRecipeReducer} from "./reducers/selectedRecipe.reducer";
import {StepsService} from "./pages/steps/steps.service";
import {StepsActions} from "./actions/steps.actions";
import {stepsReducer} from "./reducers/steps.reducer";
import {timersReducer} from "./reducers/timers.reducer";
import {TimersService} from "./pages/steps/timers.service";
import {TimersActions} from "./actions/timers.actions";
import {StepsEffects} from "./effects/steps.effects";
import {TimerComponent} from "./pages/steps/timer/timer.component";
import {EffectsModule} from "@ngrx/effects";
import {TimerCompletedComponent} from "./pages/steps/timer-completed/timer-completed.component";
import {TimersEffects} from "./effects/timers.effects";
import {personsReducer} from "./reducers/persons.reducer";
import {PersonsActions} from "./actions/persons.actions";
import {PersonsService} from "./services/persons-service";
import {PartialIngredientComponent} from "./components/ingredient/partial-ingredient.component";
import {RecipesEffects} from "./effects/recipes.effects";
import {SocialSharing} from "@ionic-native/social-sharing";
import {SocialSharingService} from "./services/social-sharing-service";
import {Ionic2RatingModule} from "ionic2-rating";
import {JsonHttp} from "./services/json-http.service";
import {TimingEffects} from "./effects/remote-events.effects";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen'
import {RatingsEffects} from "./effects/ratings.effects";
import {LocalNotifications} from "@ionic-native/local-notifications";
import {PlatformActions} from "./actions/platform.actions";
import {sessionReducer} from "./reducers/session.reducer";
import {SessionEffects} from "./effects/session.effects";
import {SessionService} from "./services/session.service";
import {SessionActions} from "./actions/session.actions";
import {RemoteEventsService} from "./services/remote-events.service";
import {UniqueDeviceID} from '@ionic-native/unique-device-id';
import {RecipeSelectionComponent} from "./components/recipe-selection/recipe-selection.component";

@NgModule({
  declarations: [
    CookingApp,
    RecipeSelectionPage,
    RecipeDetailPage,
    RecipeCompletedPage,
    StepsPage,
    IngredientComponent,
    PartialIngredientComponent,
    StepComponent,
    TimerComponent,
    TimerCompletedComponent,
    RecipeSelectionComponent,
    ValuesPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(CookingApp),
    StoreModule.provideStore({
      recipes: recipesReducer,
      selectedRecipe: selectedRecipeReducer,
      steps: stepsReducer,
      timers: timersReducer,
      numberOfPersons: personsReducer,
      sessionId: sessionReducer
    }),
    EffectsModule.run(TimingEffects),
    EffectsModule.run(StepsEffects),
    EffectsModule.run(TimersEffects),
    EffectsModule.run(RecipesEffects),
    EffectsModule.run(RatingsEffects),
    EffectsModule.run(SessionEffects),
    Ionic2RatingModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    CookingApp,
    RecipeSelectionPage,
    RecipeDetailPage,
    RecipeCompletedPage,
    StepsPage,
    TimerCompletedComponent
  ],
  providers: [
    WindowRef,
    SocialSharing,
    SocialSharingService,
    Configuration,
    ScreenService,
    RecipeService,
    RecipesActions,
    SelectedRecipeActions,
    StepsService,
    StepsActions,
    TimersService,
    TimersActions,
    PersonsService,
    PersonsActions,
    JsonHttp,
    StatusBar,
    SplashScreen,
    UniqueDeviceID,
    LocalNotifications,
    PlatformActions,
    SessionService,
    SessionActions,
    RemoteEventsService
  ]
})
export class AppModule {
  constructor(platform: Platform, store: Store<any>, platformActions: PlatformActions) {
    platform.ready().then(() =>
      store.dispatch(platformActions.ready())
    );
  }
}

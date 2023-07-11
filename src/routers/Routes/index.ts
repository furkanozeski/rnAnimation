enum Routers {
  Home = 'home',
  Intro = 'intro',
  Login = 'login',
  Register = 'register',
  Category = 'category',
  EditTask = 'edittask',
  AddTask = 'addtask',
  Calendar = 'calendar',
  Focus = 'focus',
  Profile = 'profile',
  Settings = 'settings'
}

export enum TOP_LEVEL_NAVIGATIONS {
  HOME = 'home_bottom_stack',
  CALENDAR = 'calendar_bottom_stack',
  TASK = 'task_bottom_stack',
  FOCUS = 'focus_bottom_stack',
  PROFILE = 'profile_bottom_stack',
  ONBOARDING = 'onboarding_bottom_stack'
}

export type ROOT_STACK_PARAM = {
  [TOP_LEVEL_NAVIGATIONS.HOME]: undefined,
  [TOP_LEVEL_NAVIGATIONS.CALENDAR]: undefined,
  [TOP_LEVEL_NAVIGATIONS.TASK]: undefined,
  [TOP_LEVEL_NAVIGATIONS.FOCUS]: undefined,
  [TOP_LEVEL_NAVIGATIONS.PROFILE]: undefined,
  [TOP_LEVEL_NAVIGATIONS.ONBOARDING]: undefined,
};


export type HOME_STACK_PARAM = {
  [Routers.Home]: undefined,
  [Routers.Category]: undefined,
  [Routers.EditTask]: undefined,
};

export type CALENDAR_STACK_PARAM = {
  [Routers.Calendar]: undefined,
  [Routers.EditTask]: undefined,
  [Routers.Category]: undefined,
};

export type ON_BOARDING_PARAM = {
  [Routers.Intro]: undefined,
  [Routers.Login]: undefined,
  [Routers.Register]: undefined,
};

export type PROFILE_STACK_PARAM = {
  [Routers.Settings]: undefined,
  [Routers.Login]: undefined,
  [Routers.Register]: undefined,
  [Routers.Profile]: undefined,
};

export type TASK_STACK_PARAM = {
  [Routers.AddTask]: undefined,
};

export type FOCUS_STACK_PARAM = {
  [Routers.Focus]: undefined,
};


export type NavigationParams = ROOT_STACK_PARAM;

export type HomeNavigationParam = HOME_STACK_PARAM;

export type CalendargNavigationParam = CALENDAR_STACK_PARAM;

export type OnboardingNavigationParam = ON_BOARDING_PARAM;

export type ProfileNavigationParam = PROFILE_STACK_PARAM;

export type TaskNavigationParam = TASK_STACK_PARAM;

export type FocusNavigationParam = FOCUS_STACK_PARAM;

export default Routers;

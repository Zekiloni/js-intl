# js-intl

Custom function for internationalization for JavaScript. 

## example


```
// locales object
{
  // language
  en: {
    welcome_user: "Welcome {username}."
  }
}

translate('welcome_user', { username: 'Joe' });
// Output: Welcome Joe.
```

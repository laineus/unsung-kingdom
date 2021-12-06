
![ScreenShot1](public/img/ss/title.png)
![ScreenShot2](public/img/ss/multiple.png)

# Unsung Kingdom

Unsung Kingdom is an RPG created using JavaScript.

- [WebSite](https://unsungkingdom.laineus.com/)
- [Steam](https://store.steampowered.com/app/1344790/Unsung_Kingdom/)
- [GooglePlay](https://play.google.com/store/apps/details?id=com.laineus.unsungkingdom)

# Build

```
# prod
$ yarn install
$ yarn run build
```

```
# dev
$ yarn install
$ yarn run dev
```

# Debug Tips

You can press the `M` key to activate the debug features while in game.

Please note that you can only access debug features if you start the game in `development` mode.
It doesn't work on the Title screen.

You can load a SampleSaveData (`/sample_save_data/*`) for testing purposes using one of the debug features.

# Contribute to translation

1. Create an issue and create a branch (if one does not exist for the language)
2. Create language files under `/src/locales/*` according to `/src/locales/ja`
3. Commit frequently to avoid possible conflicting commits with other contributors
4. The MR will be merged after all translations for that specific language were finished


If more than one person is contributing to the same language localization, to avoid duplication you should declare which files you will be translating.

# Contributers

English translations by [@uribgp](https://github.com/uribgp)

# Licence

The source code is under MIT Licence. You are free to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies made using the code.
You are not allowed to use assets such as graphics, sounds and scenarios.

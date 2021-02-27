import config from "../data/config";
import Box from "./Box";
import Button from "./Button";
import { slideIn, slideOut } from "../util/animations";
const OFFSET = { x: 385, y: 260 };
const AERA_LIST = [
  {
    name: t("area.town"),
    x: 960,
    y: 545,
    key: "town1",
    mapX: 2,
    mapY: 20,
    r: "right",
  },
  {
    name: t("area.castle"),
    x: 1020,
    y: 390,
    key: "castle1",
    mapX: 48,
    mapY: 37,
    r: "up",
  },
  {
    name: t("area.forest"),
    x: 320,
    y: 240,
    key: "forest1",
    mapX: 45,
    mapY: 17,
    r: "left",
    label: "Warkano Forest",
  },
  {
    name: t("area.underpass"),
    x: 1276,
    y: 705,
    key: "underpass1",
    mapX: 14,
    mapY: 39,
    r: "up",
    label: "Troias's secret passage",
  },
  {
    name: t("area.catacomb"),
    x: 995,
    y: 915,
    key: "catacomb1",
    mapX: 2,
    mapY: 14,
    r: "right",
    label: "St Anterus's catacomb",
  },
  {
    name: t("area.temple"),
    x: 1595,
    y: 530,
    key: "temple1",
    mapX: 2,
    mapY: 13,
    r: "right",
    label: "Temple of Grefalde",
  },
];
const SCALE = {
  DEFAULT: 0.37,
  ZOOM: 0.75,
};
export default class WorldMap extends Phaser.GameObjects.Container {
  constructor(scene, callback) {
    super(scene);
    this.scene = scene;
    this.callback = callback;
    this.scene.scene.pause("Game");
    this.scene.add.existing(this);
    this.scene.transition("normal").then(() => {
      this.init();
    });
    this.scene.gameScene.player.stopWalk();
  }
  init() {
    this.originalVolume = this.scene.audio.sceneVolume;
    this.scene.audio.setSceneVolume(0.3);
    this.map = this.scene.add
      .sprite(-20, -20, "world")
      .setScale(SCALE.DEFAULT)
      .setOrigin(0, 0)
      .setInteractive()
      .on("pointerdown", () => {
        this.setArea(null);
      });
    this.add(this.map);
    this.pins = {};
    AERA_LIST.forEach((map) => this.setPin(map, SCALE.DEFAULT, -20, -20));
    this.rows = AERA_LIST.filter((_, i) => {
      return this.scene.storage.state.allowed_area >= i;
    }).map((area, i, arr) => {
      const height = 40;
      const y = (50).byBottom - (arr.length - 1) * height;
      const row = this.getMission(area, 145, y + i * height);
      this.add(row);
      return row;
    });
    slideIn(this.scene, this.rows);
    this.setMarker(SCALE.DEFAULT, -20, -20);
    this.button = new Button(
      this.scene,
      (105).byRight,
      (52).byBottom,
      "Cancel",
      140,
      40
    ).setSeKey("cancel");
    this.button.on("click", () => {
      slideOut(this.scene, this.rows, { x: -200 });
      slideOut(this.scene, this.button);
      this.selected ? this.onOk() : this.onCancel();
    });
    this.add(this.button);
  }
  onOk() {
    this.map.removeInteractive();
    if (this.scene.storage.state.map === this.selected.key)
      return this.onCancel();
    const payload = { r: this.selected.r, informMapName: this.selected.label };
    this.scene.gameScene
      .mapChange(
        this.selected.key,
        this.selected.mapX.toPixelCenter,
        this.selected.mapY.toPixelCenter,
        payload
      )
      .then(() => {
        this.destroy();
      });
  }
  onCancel() {
    this.map.removeInteractive();
    this.scene.transition("normal").then(() => {
      this.destroy();
    });
  }
  setMarker(zoom, offsetX, offsetY) {
    const currentArea = AERA_LIST.find(
      (v) => v.key === this.scene.storage.state.map
    );
    const x = (OFFSET.x + currentArea.x) * zoom + offsetX;
    const y = (OFFSET.y + currentArea.y) * zoom + offsetY - 3;
    if (!this.marker) {
      this.marker = this.scene.add
        .sprite(x, y, "world_cursor")
        .setOrigin(0.5, 1)
        .setScale(0.5);
      this.marker.tween = this.scene.add.tween({
        targets: this.marker,
        duration: 600,
        ease: "Power2",
        y: y + 7,
        loop: -1,
        yoyo: true,
      });
      this.add(this.marker);
      return;
    }
    this.marker.tween.remove();
    const onComplete = () => {
      this.marker.tween = this.scene.add.tween({
        targets: this.marker,
        duration: 600,
        ease: "Power2",
        y: y + 7,
        loop: -1,
        yoyo: true,
      });
    };
    if (this.marker.moveTween) this.marker.moveTween.remove();
    this.marker.moveTween = this.scene.add.tween({
      targets: this.marker,
      duration: 400,
      ease: "Power2",
      x,
      y,
      onComplete,
    });
  }
  setPin(map, zoom, offsetX, offsetY) {
    const x = (OFFSET.x + map.x) * zoom + offsetX;
    const y = (OFFSET.y + map.y) * zoom + offsetY;
    if (!this.pins[map.key]) {
      const pin = this.scene.add.sprite(x, y, "world_pin").setScale(0.5);
      this.add(pin);
      this.pins[map.key] = pin;
      return;
    }
    this.scene.add.tween({
      targets: this.pins[map.key],
      duration: 400,
      ease: "Power2",
      x,
      y,
    });
  }
  setArea(area) {
    this.selected = area;
    this.button
      .setText(area ? "OK" : "Cancel")
      .setSeKey(area ? "click" : "cancel");
    const positionX = area
      ? config.WIDTH.half - (area.x + OFFSET.x) * SCALE.ZOOM
      : -20;
    const positionY = area
      ? config.HEIGHT.half - (area.y + OFFSET.y) * SCALE.ZOOM
      : -20;
    const scale = area ? SCALE.ZOOM : SCALE.DEFAULT;
    this.scene.add.tween({
      targets: this.map,
      duration: 400,
      ease: "Power2",
      x: positionX,
      y: positionY,
      scale,
    });
    this.rows.forEach((row) => row.setActive(row.area === area));
    AERA_LIST.forEach((map) => {
      this.pins[map.key].setFrame(map === area ? 1 : 0);
      this.setPin(map, area ? SCALE.ZOOM : SCALE.DEFAULT, positionX, positionY);
    });
    this.setMarker(area ? SCALE.ZOOM : SCALE.DEFAULT, positionX, positionY);
  }
  getMission(area, x, y) {
    const container = this.scene.add.container(x, y).setSize(220, 32);
    container.area = area;
    const box = new Box(this.scene, 0, 0, 220, 32);
    container.setInteractive().on("pointerdown", () => {
      this.scene.audio.se("click");
      this.setArea(area);
    });
    const title = this.scene.add
      .text(-90, 0, area.name, {
        fontSize: 14,
        fontStyle: "bold",
        fontFamily: config.FONTS.TEXT,
      })
      .setOrigin(0, 0.5);
    container.add([box, title]);
    container.setActive = (bool) =>
      title.setFill(
        bool
          ? config.COLORS.theme.toColorString
          : config.COLORS.white.toColorString
      );
    return container;
  }
  destroy() {
    this.scene.audio.setSceneVolume(this.originalVolume);
    this.scene.scene.resume("Game");
    this.callback();
    super.destroy();
  }
}

import BaseEntity from "./baseEntity.js";

export default class SalaEntity extends BaseEntity {
  #id;
  #nome;
  #usuarioId;

  get id() {
    return this.#id;
  }
  set id(value) {
    this.#id = value;
  }

  get nome() {
    return this.#nome;
  }
  set nome(value) {
    this.#nome = value;
  }

  get usuarioId() {
    return this.#usuarioId;
  }
  set usuarioId(value) {
    this.#usuarioId = value;
  }

  constructor(id, nome, usuarioId) {
    super();
    this.#id = id;
    this.#nome = nome;
    this.#usuarioId = usuarioId;
  }
}

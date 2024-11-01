import BaseEntity from "./baseEntity.js";

export default class JogoEntity extends BaseEntity {
  #id;
  #dtInicio;
  #dtFim;
  #salaId;

  get id() {
    return this.#id;
  }
  set id(value) {
    this.#id = value;
  }

  get dtInicio() {
    return this.#dtInicio;
  }
  set dtInicio(value) {
    this.#dtInicio = value;
  }

  get dtFim() {
    return this.#dtFim;
  }
  set dtFim(value) {
    this.#dtFim = value;
  }

  get salaId() {
    return this.#salaId;
  }
  set salaId(value) {
    this.#salaId = value;
  }

  constructor(id, dtInicio, dtFim, salaId) {
    super();
    this.#id = id;
    this.#dtInicio = dtInicio;
    this.#dtFim = dtFim;
    this.#salaId = salaId;
  }
}

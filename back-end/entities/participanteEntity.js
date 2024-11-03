import BaseEntity from "./baseEntity.js";

export default class ParticipanteEntity extends BaseEntity {
  #id;
  #dtEntrada;
  #dtSaida;
  #usuarioId;
  #salaId;
  #equipeId;

  get id() {
    return this.#id;
  }
  set id(value) {
    this.#id = value;
  }

  get dtEntrada() {
    return this.#dtEntrada;
  }
  set dtEntrada(value) {
    this.#dtEntrada = value;
  }

  get dtSaida() {
    return this.#dtSaida;
  }
  set dtSaida(value) {
    this.#dtSaida = value;
  }

  get usuarioId() {
    return this.#usuarioId;
  }
  set usuarioId(value) {
    this.#usuarioId = value;
  }

  get salaId() {
    return this.#salaId;
  }
  set salaId(value) {
    this.#salaId = value;
  }

  get equipeId() {
    return this.#equipeId;
  }
  set equipeId(value) {
    this.#equipeId = value;
  }

  constructor(id, dtEntrada, dtSaida, usuarioId, salaId, equipeId) {
    super();
    this.#id = id;
    this.#dtEntrada = dtEntrada;
    this.#dtSaida = dtSaida;
    this.#usuarioId = usuarioId;
    this.#salaId = salaId;
    this.#equipeId = equipeId;
  }
}

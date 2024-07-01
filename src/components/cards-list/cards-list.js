import { DivComponent } from "../../common/div-component.js";
import { Card } from "../card/card.js";
import './cards-list.css';

export class CardList extends DivComponent{
    constructor(appState, parentState) {
        super();
        this.appState = appState;
        this.parentState = parentState;
    }

    render() {
        if (this.parentState.loading) {
            this.el.innerHTML = `
                <div class="card_grid__loader">
                    Loading...
                    <img src="/static/loading.gif" alt="loading gif">
                </div>
            `;
            return this.el;
        }

        const cardGrid = document.createElement('div');
        cardGrid.classList.add('card_grid');
        this.el.append(cardGrid);

        for (let card of this.parentState.list) {
            cardGrid.append(new Card(this.appState, card).render());
        }
        return this.el;
    }
}
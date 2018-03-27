import { Pipe, PipeTransform } from '@angular/core';

import { Recipe } from '../food/food.model';

@Pipe({
    name: 'filter'
})

export class FilterPipe implements PipeTransform {
    transform(items: Recipe[], searchText: string): Recipe[] {
        if (!items) { return []; }
        if (!searchText) { return items; }

        searchText = searchText.toLowerCase();

        return items.filter( it => {
            return it.Title.toLowerCase().includes(searchText);
        });
    }
}

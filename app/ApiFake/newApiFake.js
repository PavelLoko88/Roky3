import { useAppSelector } from "../GlobalRedux/utils/hooks";
import { apiFake } from "./apiFake";

export let sortApiFake = [];

sortApiFake = sortApiFake.concat(apiFake);

// let i = 6;
// while (i--)
//     sortApiFake.pop();

export function sortDate(sort, items) {

    if (items == 12) {
        items = 0;
    }

    if (sort === "sort by newest") {

        sortApiFake = [];
        sortApiFake = sortApiFake.concat(apiFake);
        sortApiFake.sort(function (a, b) {
            return ((a.webPublicationDate < b.webPublicationDate) ? 1 : (a.webPublicationDate > b.webPublicationDate) ? -1 : 0);
        });

        while (items--)
            sortApiFake.pop();


    } else {
        sortApiFake = [];
        sortApiFake = sortApiFake.concat(apiFake);

        while (items--)
            sortApiFake.pop();

    }


    // if (sort === "sort by newest") {

    //     sortApiFake = [];
    //     sortApiFake = sortApiFake.concat(apiFake);
    //     sortApiFake.sort(function (a, b) {
    //         return ((a.webPublicationDate < b.webPublicationDate) ? 1 : (a.webPublicationDate > b.webPublicationDate) ? -1 : 0);
    //     });
    //     if (sortApiFake > items) {
    //         while (items--)
    //             sortApiFake.pop();
    //     } else if (sortApiFake <= items) {
    //         sortApiFake = [];
    //         sortApiFake = sortApiFake.concat(apiFake);
    //         while (items--)
    //             sortApiFake.pop();
    //     }

    // } else {
    //     sortApiFake = [];
    //     sortApiFake = sortApiFake.concat(apiFake);
    //     if (sortApiFake > items) {
    //         while (items--)
    //             sortApiFake.pop();
    //     } else if (sortApiFake <= items) {
    //         sortApiFake = [];
    //         sortApiFake = sortApiFake.concat(apiFake);
    //         while (items--)
    //             sortApiFake.pop();
    //     }
    // }
}



// sortApiFake.sort(function (a, b) {
//     return ((a.webPublicationDate < b.webPublicationDate) ? 1 : (a.webPublicationDate > b.webPublicationDate) ? -1 : 0);
// });

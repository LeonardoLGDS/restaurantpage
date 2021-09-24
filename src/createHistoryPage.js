export default function createHistoryPage() {
    const contentDiv = document.createElement('span');


    let newHistoryParag = document.createElement('p');
    newHistoryParag.setAttribute('id', 'history-text1`');
    newHistoryParag.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac quam eu elit ultricies feugiat.In egestas velit eros, vel suscipit ipsum tincidunt in .Suspendisse sed sem lectus.Pellentesque eleifend enim vel pretium porttitor.Fusce viverra massa dui.Morbi vitae risus vitae sapien elementum faucibus eget id enim.Quisque bibendum in eros eu tincidunt.Mauris at blandit leo.Nullam quis orci risus.Nulla facilisi.Nam tincidunt congue quam nec mollis.Nam felis sapien, elementum nec justo vel, finibus sagittis justo.In hac habitasse platea dictumst.Nulla congue ultrices luctus.";

    contentDiv.append(newHistoryParag);

    newHistoryParag = document.createElement('p');
    newHistoryParag.setAttribute('id', 'history-text2');
    newHistoryParag.innerHTML = "Donec sed ipsum interdum, fermentum est eu, commodo nulla. Sed nec molestie ante. Nullam ipsum sapien, volutpat quis erat at, rhoncus varius mauris. Donec elementum tincidunt nunc, ac lacinia lorem condimentum non. Nullam non semper sapien. Pellentesque a interdum magna. Morbi non suscipit lacus, ac aliquet tortor. Etiam commodo ultricies pharetra. Donec semper libero a erat euismod commodo. Nunc nibh felis, congue ac lacus in, ultricies luctus arcu. Curabitur sollicitudin ligula et metus porttitor, vel ultrices erat venenatis. Quisque at feugiat odio, ut facilisis nibh. Praesent ut nunc non dolor tempor finibus vel a quam. Pellentesque aliquam orci metus, in elementum arcu sollicitudin vitae.";
    contentDiv.append(newHistoryParag);

    newHistoryParag = document.createElement('p');
    newHistoryParag.setAttribute('id', 'history-text3');
    newHistoryParag.innerHTML = "Integer ultricies pretium dui vitae tempor. Praesent volutpat aliquet nibh ut finibus. Ut varius vitae felis eget bibendum. Sed nec lacus purus. Donec et imperdiet enim. Aenean semper, nisi vitae rutrum dictum, augue elit placerat massa, eu egestas ante mi nec lorem. Morbi diam felis, accumsan eget augue ullamcorper, euismod pellentesque erat. Curabitur ut gravida augue, id dictum augue. Vestibulum quis diam sapien. Morbi pharetra quam nec nulla tristique, nec viverra nisi laoreet. Etiam dapibus luctus diam, ut scelerisque sapien efficitur eget. Mauris ultrices justo mi, vitae molestie enim mattis quis. Curabitur eget elementum sapien, sit amet fringilla nulla. Curabitur vel porttitor nibh, quis tincidunt tortor. Maecenas interdum iaculis nibh, ut consectetur sem rutrum ut. Nulla vitae lectus sed dui vulputate feugiat ac eu arcu.";
    contentDiv.append(newHistoryParag);
    return contentDiv;
}
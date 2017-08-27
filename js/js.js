/* Плавный скролл */
var link_menu = document.getElementById('min_menu');
smooth_scroll(link_menu, scrollY);

function smooth_scroll(link_menu, scrollys) {

    link_menu.addEventListener('click', function (e) {
        e.preventDefault();

        switch (e.target.textContent) {
            case "Работы":
                var w = 500;
                break;
            case "Дизайн":
                w = 1825;
                break;
            case "Сертификаты":
                w = 5190;
                break;
            case "Задачи":
                w = 6020;
                break;
            default:
                w = 0;
                break;
        }

        if (scrollys < w) {

            var intervalID = setInterval(function () {

                scrollTo(0, scrollys += 15);
                if (scrollys >= w) {
                    clearInterval(intervalID);
                }
            }, 5);

        } else if (scrollys > w) {
            intervalID = setInterval(function () {

                scrollTo(0, scrollys -= 15);
                if (scrollys <= w) {
                    clearInterval(intervalID);
                }
            }, 5);
        }
    });
}

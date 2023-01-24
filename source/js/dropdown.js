const SHOW_DROPDOWN_CLASSNAME = 'dropdown__target--show';

const dropdownControls = document.querySelectorAll('[data-call="dropdown"]');

let activeDropdown;

function controlClickHandler(evt, control) {
    const dropdownTargetId = control.getAttribute('aria-controls');

    if (activeDropdown && activeDropdown.id !== dropdownTargetId) {
        closeDropdown();
    }

    if (dropdownTargetId) {
        const dropdownTarget = document.querySelector(`#${dropdownTargetId}`);

        if (dropdownTarget.classList.contains(SHOW_DROPDOWN_CLASSNAME)) {
            closeDropdown();
        } else {
            showDropdown(dropdownTarget);
        }
    }

    evt.preventDefault();
}

function showDropdown(dropdownTarget) {
    dropdownTarget.classList.add(SHOW_DROPDOWN_CLASSNAME);

    activeDropdown = dropdownTarget;

    document.addEventListener('click', documentClickHandler);
    document.addEventListener('keydown', escPressHandler);
}

function closeDropdown() {
    if (activeDropdown) {
        activeDropdown.classList.remove(SHOW_DROPDOWN_CLASSNAME);

        activeDropdown = undefined;

        document.removeEventListener('click', documentClickHandler);
        document.removeEventListener('keydown', escPressHandler);
    }
}

function documentClickHandler(evt) {
    let target = evt.target;

    while (target !== document.body) {
        if (target === activeDropdown || target.getAttribute('aria-controls') === activeDropdown.id) {
            return;
        }

        target = target.parentNode;
    }

    closeDropdown();
}

function escPressHandler(evt) {
    if (evt.key === 'Escape') {
        evt.preventDefault();

        closeDropdown();
    }
}

function dropdown() {
    for (let i = 0; i < dropdownControls.length; i++) {
        dropdownControls[i].addEventListener('click', (evt) => {
            controlClickHandler(evt, dropdownControls[i]);
        });
    }
}

export default dropdown;
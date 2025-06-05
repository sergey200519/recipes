import { API_URL } from './config';

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export const getMealById = async (mealID) => {
    try {
        const res = await fetch(`${API_URL}lookup.php?i=${mealID}`);
        const text = await res.text();
        try {
            return JSON.parse(text);
        } catch (err) {
            console.warn(text, err);
            return null;
        }
    } catch (e) {
        console.error(`Error fetch getMealById(${mealID}):`, e);
        return null;
    }
};
export const getAllCategories = async () => {
    try {
        const res = await fetch(`${API_URL}categories.php`);
        const text = await res.text();
        try {
            return JSON.parse(text);
        } catch (err) {
            console.warn(text, err);
            return null;
        }
    } catch (e) {
        console.error("Error getAllCategories:", e);
        return null;
    }
};

export const getFilteredCategory = async (catName) => {
    try {
        const res = await fetch(`${API_URL}filter.php?c=${catName}`);
        const text = await res.text();
        try {
            return JSON.parse(text);
        } catch (err) {
            console.warn(text, err);
            return null;
        }
    } catch (e) {
        console.error(`Error fetch getFilteredCategory(${catName}):`, e);
        return null;
    }
};

export const getAllMeals = async () => {
    const allMeals = [];

    try {
        const categoriesRes = await fetch(`${API_URL}list.php?c=list`);
        const categoriesText = await categoriesRes.text();

        let categoriesData;
        try {
            categoriesData = JSON.parse(categoriesText);
        } catch {
            console.warn(categoriesText);
            return { meals: [] };
        }

        const categories = categoriesData.meals || [];

        for (const category of categories) {
            await delay(1500);

            try {
                const mealsRes = await fetch(`${API_URL}filter.php?c=${category.strCategory}`);
                const mealsText = await mealsRes.text();
                const mealsData = JSON.parse(mealsText);

                if (mealsData.meals) {
                    allMeals.push(...mealsData.meals);
                }
            } catch (err) {
                console.warn(`Err ${category.strCategory}:`, err);
            }
        }

        return { meals: allMeals };
    } catch (e) {
        console.error("Error getAllMeals:", e);
        return { meals: [] };
    }
};

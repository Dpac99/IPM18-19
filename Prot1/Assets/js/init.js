if (localStorage.getItem("hotels") === null) {

    localStorage.setItem("hotels", JSON.stringify([
        {
            name: "Hotel Ritz",
            stars: 5,
            checkin: "07/05/2019 - 10:00",
            checkout: "12/05/2019 - 12:00",
            address: "Rotunda do Marques",
            contact: "912738126",
            room: 312
        },
        {
            name: "Hotel Roma",
            stars: 4,
            checkin: "13/05/2019 - 08:00",
            checkout: "19/05/2019 - 12:00",
            address: "Avenida de Roma",
            contact: "912738126",
            room: 114
        },
        {
            name: "Hotel Tivoli",
            stars: 3,
            checkin: "29/05/2019 - 07:00",
            checkout: "05/0562019 - 12:00",
            address: "Rua Castilho",
            contact: "912738126",
            room: 420
        }
    ]))

    localStorage.setItem("friends", JSON.stringify([
        "Tiago Le",
        "Diogo Pacheco",
        "Andreia Pereira",
        "Pedro Lamego",
        "Joao Silva",
    ]))

    localStorage.setItem("flights", JSON.stringify([
        {
            company: "Ryanair",
            itinerary: "LIS-OPO",
            number: "2543",
            seat: "28A",
            date: "11/03/2019",
            time: "06:15",
        },
        {
            company: "Ryanair",
            itinerary: "OPO-LIS",
            number: "2271",
            seat: "24A",
            date: "18/03/2019",
            time: "18:55",
        },
        {
            company: "TAP",
            itinerary: "LIS-PDL",
            number: "1371",
            seat: "2A",
            date: "19/05/2019",
            time: "19:05",
        },
        {
            company: "TAP",
            itinerary: "PDL-LIS",
            number: "1149",
            seat: "5F",
            date: "22/06/2019",
            time: "10:25",
        }
    ]))

    localStorage.setItem("plans", JSON.stringify([
        {
            date: "05/03/2019",
            plans: [
                {
                    content: "Breakfast",
                    time: "08:30"
                },
                {
                    content: "Lunch",
                    time: "13:00"
                },
                {
                    content: "Museum",
                    time: "14:30"
                },
                {
                    content: "Dinner",
                    time: "21:00"
                },
                {
                    content: "Disco",
                    time: "01:00"
                },
                {
                    content: "Breakfast",
                    time: "08:30"
                },
                {
                    content: "Lunch",
                    time: "13:00"
                },
                {
                    content: "Museum",
                    time: "14:30"
                },
                {
                    content: "Dinner",
                    time: "21:00"
                },
                {
                    content: "Disco",
                    time: "01:00"
                }
            ]
        },
        {
            date: "06/03/2019",
            plans: [
                {
                    content: "Breakfast",
                    time: "08:30"
                },
                {
                    content: "Lunch",
                    time: "13:00"
                },
                {
                    content: "Museum",
                    time: "14:30"
                },
                {
                    content: "Dinner",
                    time: "21:00"
                },
                {
                    content: "Disco",
                    time: "01:00"
                }
            ]
        },
        {
            date: "07/03/2019",
            plans: [
                {
                    content: "Breakfast",
                    time: "08:30"
                },
                {
                    content: "Lunch",
                    time: "13:00"
                },
                {
                    content: "Museum",
                    time: "14:30"
                },
                {
                    content: "Dinner",
                    time: "21:00"
                },
                {
                    content: "Disco",
                    time: "01:00"
                }
            ]
        }
    ]))
    localStorage.setItem("currentPlan", "")
    localStorage.setItem("currentPlanIndex", "0")
    localStorage.setItem("bpm", [81,76,84,80, 86, 82] )
    localStorage.setItem("BPMCounter", 5)
    localStorage.setItem("o2", [95, 95, 93])
    localStorage.setItem("km", JSON.stringify({
        dayTotal: 4.5,
        values: [1.2, 1.3, 2]
    }))
}

if (localStorage.getItem("profileId") === null)
    localStorage.setItem("profileId", 'Walking')
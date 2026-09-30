# PhishQuest /simulation dump

Captured simulation dataset: **11 actual email objects** in the recovered `wl` array.

| # | Sender | Subject | Date | Classification |
|---:|---|---|---|---|
| 1 | Maybank Security | Akaun Anda Telah Digantung | Hari Ini, 10:30 PG | Phishing |
| 2 | Google | Amaran Keselamatan Google | Hari Ini, 11:15 PG | Selamat |
| 3 | Shopee Malaysia | Tahniah! Anda Memenangi Baucar RM500 | Hari Ini, 12:20 PTG | Phishing |
| 4 | Netflix | Resit Pembayaran Bulanan Anda | Semalam, 8:45 PG | Selamat |
| 5 | J&T Express | Penghantaran Parcel Gagal | Hari Ini, 2:10 PTG | Phishing |
| 6 | PUO Student Portal | Notifikasi Jadual Akademik | Hari Ini, 9:00 PG | Selamat |
| 7 | Touch 'n Go eWallet | Akaun Anda Memerlukan Pengesahan | Hari Ini, 3:30 PTG | Phishing |
| 8 | Microsoft 365 | Mesyuarat Microsoft Teams | Hari Ini, 4:00 PTG | Selamat |
| 9 | WhatsApp Support | Akaun WhatsApp Anda Akan Disekat | Hari Ini, 5:15 PTG | Phishing |
| 10 | Spotify | Langganan Spotify Berjaya Diperbaharui | Semalam, 7:30 PG | Selamat |
| 11 | Bank Negara Malaysia | Tuntutan Bantuan Kewangan Segera | Hari Ini, 6:00 PTG | Phishing |

## Important source discrepancy

The recovered UI hard-codes `12` E-mel, `6` Selamat and `6` Phishing on the start screen, and its result text says all 12 simulations were completed. However, the actual `wl` dataset in the recovered JS contains **11 objects: 6 phishing and 5 safe**. The reconstructed simulation preserves the recovered dataset rather than inventing a missing 12th record.

## Recovered behavior
- Randomly shuffles the email dataset at start/restart.
- 30-second timer per email.
- User chooses `🟢 Selamat` or `🔴 Phishing`.
- Correct answer gives +10 XP.
- Timeout produces `MASA TAMAT!` and no XP.
- Feedback shows the correct classification, explanation, and red flags.
- Final screen shows score, percentage and XP, then allows restart.
- Original React code attempts to insert the result into Supabase `simulation_results` and update `profiles.total_xp`. The static reconstruction does not call that backend.